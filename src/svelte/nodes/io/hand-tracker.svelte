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
<script lang="ts">
    import NodeUi from "src/svelte/widgets/NodeUI.svelte";
    import { createEmitter } from "src/ts/util/NodeUtil";

    import * as mpHands from "@mediapipe/hands";
    import * as handdetection from "@tensorflow-models/hand-pose-detection";
    import { Camera, fingerLookupIndices } from "./hand-tracker/camera";
    import vec3 from "vec3";

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
            const leftHandOpened = leftHand ? getHandOpenedValue(leftHand) : 0;
            // emit CC message
            const value = Math.round(Math.pow(leftHandOpened, 2) * 35 * 127) - 20;
            emit("MIDI", 0xb0, 0, boundValue(value, 0, 127));
        }
        if (rightHand != null) {
            const rightHandOpened = rightHand ? getHandOpenedValue(rightHand) : 0;
            // emit CC message
            const value = Math.round(Math.pow(rightHandOpened, 2) * 35 * 127) - 20;
            emit("MIDI", 0xb0, 2, boundValue(value, 0, 127));
        }
    }

    function getHandOpenedValue(hand: handdetection.Hand) {
        let avgdist = 0;
        const wrist = { z: 0, ...hand.keypoints3D[0] };
        for (const [finger, indices] of Object.entries(fingerLookupIndices)) {
            if (finger === "thumb") continue;
            const tip = { z: 0, ...hand.keypoints3D[indices[indices.length - 1]] };
            const dist = vec3(wrist).distanceTo(vec3(tip));
            avgdist += dist;
        }
        avgdist /= 4;
        return avgdist;
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
                hands = await detector.estimateHands(camera.video, { flipHorizontal: false });
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
            camera.drawResults(hands);
            processHands(hands);
        }
    }

    async function renderPrediction() {
        await renderResult();

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
