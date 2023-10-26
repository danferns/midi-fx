<!--

    Copyright (C) 2023 Daniel Fernandes

    This file is part of MIDI-FX.

    MIDI-FX is free software: you can redistribute it and/or modify it
    under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    MIDI-FX is distributed in the hope that it will be useful, but
    WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
    General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with MIDI-FX. If not, see <https://www.gnu.org/licenses/>.

-->
<script lang="ts" context="module">
    export const doc: string = `
    Detects hand gestures from the camera feed.

    The left and right hands map to different controls. Each hand can control one parameter 
    by opening / closing itself, and the other by facing the palm towards or away from the camera. 
    `;
</script>

<script lang="ts">
    import NodeUi from "src/svelte/widgets/NodeUI.svelte";
    import { createEmitter } from "src/ts/util/NodeUtil";

    import * as mpHands from "@mediapipe/hands";
    import * as handdetection from "@tensorflow-models/hand-pose-detection";
    import { Camera, fingerLookupIndices } from "./hand-tracker/camera";
    import vec3, { Vec3 } from "vec3";

    import { onMount } from "svelte";
    import { boundValue } from "src/ts/util/MathUtil";

    export let id: string;
    export const inputs: NodeInputs = {};
    export const outputs: NodeOutputs = {
        MIDI: new Set(),
    };
    export let state = {};
    const emit = createEmitter(id, outputs);

    let video: HTMLVideoElement;
    let canvas: HTMLCanvasElement;

    let detector: handdetection.HandDetector, camera: Camera;

    function processHands(hands: handdetection.Hand[]) {
        // get the left and right hands from array, if they are detected
        // note: left and right hand vars are flipped, because the video is mirrored
        const rightHand =
            hands[0].handedness === "Left"
                ? hands[0]
                : hands[1].handedness === "Left"
                ? hands[1]
                : null;
        const leftHand =
            hands[0].handedness === "Right"
                ? hands[0]
                : hands[1].handedness === "Right"
                ? hands[1]
                : null;

        if (leftHand != null) {
            const handOpenValue = processHandOpenGesture(leftHand, "left");
            emit("MIDI", 0xb0, 0, handOpenValue);

            const handDirectionValue = processHandDirectionGesture(leftHand, "left");
            emit("MIDI", 0xb0, 1, handDirectionValue);
        }
        if (rightHand != null) {
            const handOpenValue = processHandOpenGesture(rightHand, "right");
            emit("MIDI", 0xb0, 2, handOpenValue);

            const handDirectionValue = processHandDirectionGesture(rightHand, "right");
            emit("MIDI", 0xb0, 3, handDirectionValue);
        }
    }

    function processHandDirectionGesture(hand: handdetection.Hand, side: string): number {
        const direction = getHandDirectionValue(hand);
        let value = direction * 0.5 + 0.5;
        if (side === "right") {
            value = 1 - value;
        }
        return Math.round(boundValue(value * 127, 0, 127));
    }

    function getHandDirectionValue(hand: handdetection.Hand) {
        const points = hand.keypoints3D;
        const wrist = getVec3ForIndex(points, 0);
        const indexBase = getVec3ForIndex(points, fingerLookupIndices.indexFinger[1]);
        const pinkyBase = getVec3ForIndex(points, fingerLookupIndices.pinky[1]);

        const wristIndex = indexBase.minus(wrist).normalize();
        const wristPinky = pinkyBase.minus(wrist).normalize();

        const palmVector = wristIndex.cross(wristPinky);
        return palmVector.normalize().dot(new Vec3(0, 0, 1));
    }
    let prevValues = {
        left: 0,
        right: 0,
    };

    function processHandOpenGesture(hand: handdetection.Hand, side: string): number {
        const score = hand.score;
        let handOpened = hand ? getHandOpenedValue(hand) : 0;
        handOpened = score * handOpened + (1 - score) * prevValues[side];
        prevValues[side] = handOpened;
        // emit CC message
        const value = Math.pow(handOpened, 2) * 127 * 1.1;
        return Math.round(boundValue(value, 0, 127));
    }

    function getVec3ForIndex(points: handdetection.Keypoint[], index: number) {
        return vec3({ z: 0, ...points[index] });
    }

    function getHandOpenedValue(hand: handdetection.Hand) {
        let avgDotProductHand = 0;
        const points = hand.keypoints3D;
        const wrist = getVec3ForIndex(points, 0);
        for (const [finger, indices] of Object.entries(fingerLookupIndices)) {
            if (finger === "thumb") continue;
            const fingerBase = getVec3ForIndex(points, indices[1]);
            const knuckleInner = getVec3ForIndex(points, indices[2]);
            const knuckleOuter = getVec3ForIndex(points, indices[3]);
            const tip = getVec3ForIndex(points, indices[4]);

            const bones = [
                vec3(wrist).minus(vec3(fingerBase)).normalize(),
                vec3(fingerBase).minus(vec3(knuckleInner)).normalize(),
                vec3(knuckleInner).minus(vec3(knuckleOuter)).normalize(),
                vec3(knuckleOuter).minus(vec3(tip)).normalize(),
            ];

            let avgDotProdFinger = 0;

            for (let i = 0; i < bones.length - 1; i++) {
                const dotProduct = bones[i].innerProduct(bones[i + 1]);
                avgDotProdFinger += dotProduct;
            }

            avgDotProdFinger /= bones.length - 1;
            avgDotProductHand += avgDotProdFinger;
        }
        avgDotProductHand /= 4;
        return avgDotProductHand;
    }

    onMount(async () => {
        camera = await Camera.setupCamera(
            { targetFPS: 60, sizeOption: "360 X 270" },
            video,
            canvas
        );
        detector = await createDetector();
        renderPrediction();
    });

    async function createDetector() {
        return handdetection.createDetector(handdetection.SupportedModels.MediaPipeHands, {
            runtime: "mediapipe",
            maxHands: 2,
            solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/hands@${mpHands.VERSION}`,
        });
    }

    async function renderResult() {
        if (camera.video.readyState < 2) {
            await new Promise<void>((resolve) => {
                camera.video.onloadeddata = () => {
                    resolve();
                };
            });
        }

        let hands: handdetection.Hand[] = null;

        // Detector can be null if initialization failed (for example when loading
        // from a URL that does not exist).
        if (detector != null) {
            // Detectors can throw errors, for example when using custom URLs that
            // contain a model that doesn't provide the expected output.
            try {
                hands = await detector.estimateHands(camera.video, {
                    flipHorizontal: false,
                    staticImageMode: false,
                });
            } catch (error) {
                detector.dispose();
                detector = null;
                console.error(error);
            }
        }

        camera.drawCtx();

        // The null check makes sure the UI is not in the middle of changing to a
        // different model. If during model change, the result is from an old model,
        // which shouldn't be rendered.
        if (hands && hands.length > 0) {
            camera.preprocessHands(hands);
            processHands(hands);
            camera.drawResults(hands);
        }
    }

    async function renderPrediction() {
        try {
            await renderResult();
        } catch (e) {
            console.error(e);
        }

        requestAnimationFrame(renderPrediction);
    }
</script>

<NodeUi>
    <div>
        <canvas bind:this={canvas} />
        <!-- svelte-ignore a11y-media-has-caption -->
        <video bind:this={video} />
    </div>
</NodeUi>

<style>
    div {
        height: 270px;
        width: 360px;
        padding: 8px;
    }
    video,
    canvas {
        height: 270px;
        width: 360px;
        border-radius: 4px;
    }

    video {
        display: none;
    }
</style>
