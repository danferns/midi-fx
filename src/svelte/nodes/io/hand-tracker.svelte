<!--

    Copyright (C) 2023, 2025 Daniel Fernandes

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

    import { handLandmarker, setupLandmarker } from "./hand-tracker/detector";
    import { Camera } from "./hand-tracker/camera";
    import { processHandOpenGesture, processHandDirectionGesture } from "./hand-tracker/analysis";

    import { onMount } from "svelte";
    import { HandLandmarkerResult } from "@mediapipe/tasks-vision";

    export let id: string;
    export const inputs: NodeInputs = {};
    export const outputs: NodeOutputs = {
        MIDI: new Set(),
    };
    export let state = {};
    const emit = createEmitter(id, outputs);

    let video: HTMLVideoElement;
    let canvas: HTMLCanvasElement;
    let camera: Camera;

    onMount(async () => {
        // initial setup for the camera
        camera = await Camera.setupCamera(video, canvas);
        await setupLandmarker();
        processFrame();
    });

    // do the detection at the browser's refresh rate
    function processFrame() {
        try {
            const result = computeLandmarks();
            camera.drawCtx();
            if (result.handedness.length) {
                processResult(result);
            }
        } catch (e) {
            console.error(e);
        }
        requestAnimationFrame(processFrame);
    }

    function computeLandmarks() {
        return handLandmarker.detectForVideo(camera.video, performance.now());
    }

    function processResult(result: HandLandmarkerResult) {
        const handOpenValues = processHandOpenGesture(result);
        const handDirectionValues = processHandDirectionGesture(result);

        for (let i = 0; i < result.handedness.length; i++) {
            const isLeftHand = result.handedness[i][0].categoryName === "Left";
            if (isLeftHand) {
                emit("MIDI", 0xb0, 0, handOpenValues[i] * 127);
                emit("MIDI", 0xb0, 1, handDirectionValues[i] * 127);
            } else {
                // right hand
                emit("MIDI", 0xb0, 2, handOpenValues[i] * 127);
                emit("MIDI", 0xb0, 3, handDirectionValues[i] * 127);
            }
            camera.drawHand(result.landmarks[i], isLeftHand);
        }
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
