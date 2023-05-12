/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

// Modified by Daniel Fernandes

import * as params from "./params";

// These anchor points allow the hand pointcloud to resize according to its
// position in the input.
export const ANCHOR_POINTS = [
    [0, 0, 0],
    [0, 0.1, 0],
    [-0.1, 0, 0],
    [-0.1, -0.1, 0],
];

export const fingerLookupIndices = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20],
}; // for rendering each finger as a polyline

export const connections = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [0, 5],
    [5, 6],
    [6, 7],
    [7, 8],
    [0, 9],
    [9, 10],
    [10, 11],
    [11, 12],
    [0, 13],
    [13, 14],
    [14, 15],
    [15, 16],
    [0, 17],
    [17, 18],
    [18, 19],
    [19, 20],
];

export class Camera {
    constructor(video, canvas) {
        this.video = video;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
    }

    /**
     * Initiate a Camera instance and wait for the camera stream to be ready.
     * @param cameraParam From app `STATE.camera`.
     */
    static async setupCamera(cameraParam, video, canvas) {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            throw new Error("Browser API navigator.mediaDevices.getUserMedia not available");
        }

        const { targetFPS, sizeOption } = cameraParam;
        const $size = params.VIDEO_SIZE[sizeOption];
        const videoConfig = {
            audio: false,
            video: {
                facingMode: "user",
                // Only setting the video to a specified size for large screen, on
                // mobile devices accept the default size.
                width: $size.width,
                height: $size.height,
                frameRate: {
                    ideal: targetFPS,
                },
            },
        };

        const stream = await navigator.mediaDevices.getUserMedia(videoConfig);

        const camera = new Camera(video, canvas);
        camera.video.srcObject = stream;

        await new Promise((resolve) => {
            camera.video.onloadedmetadata = () => {
                resolve();
            };
        });

        camera.video.play();

        const videoWidth = camera.video.videoWidth;
        const videoHeight = camera.video.videoHeight;
        // Must set below two lines, otherwise video element doesn't show.
        camera.video.width = videoWidth;
        camera.video.height = videoHeight;

        camera.canvas.width = videoWidth;
        camera.canvas.height = videoHeight;

        // Because the image from camera is mirrored, need to flip horizontally.
        camera.ctx.translate(camera.video.videoWidth, 0);
        camera.ctx.scale(-1, 1);

        return camera;
    }

    drawCtx() {
        this.ctx.drawImage(this.video, 0, 0, this.video.videoWidth, this.video.videoHeight);
    }

    clearCtx() {
        this.ctx.clearRect(0, 0, this.video.videoWidth, this.video.videoHeight);
    }

    /**
     * Draw the keypoints on the video.
     * @param hands A list of hands to render.
     */
    drawResults(hands) {
        // Sort by right to left hands.
        hands.sort((hand1, hand2) => {
            if (hand1.handedness < hand2.handedness) return 1;
            if (hand1.handedness > hand2.handedness) return -1;
            return 0;
        });

        // Pad hands to clear empty scatter GL plots.
        while (hands.length < 2) hands.push({});

        for (let i = 0; i < hands.length; ++i) {
            // Third hand and onwards scatterGL context is set to null since we
            // don't render them.
            this.drawResult(hands[i]);
        }
    }

    /**
     * Draw the keypoints on the video.
     * @param hand A hand with keypoints to render.
     * @param ctxt Scatter GL context to render 3D keypoints to.
     */
    drawResult(hand) {
        if (hand.keypoints != null) {
            this.drawKeypoints(hand.keypoints, hand.handedness);
        }
    }

    /**
     * Draw the keypoints on the video.
     * @param keypoints A list of keypoints.
     * @param handedness Label of hand (either Left or Right).
     */
    drawKeypoints(keypoints, handedness) {
        const keypointsArray = keypoints;
        this.ctx.fillStyle = handedness === "Left" ? "Red" : "Blue";
        this.ctx.strokeStyle = "White";
        this.ctx.lineWidth = params.DEFAULT_LINE_WIDTH;

        for (let i = 0; i < keypointsArray.length; i++) {
            const y = keypointsArray[i].x;
            const x = keypointsArray[i].y;
            this.drawPoint(x - 2, y - 2, 3);
        }

        const fingers = Object.keys(fingerLookupIndices);
        for (let i = 0; i < fingers.length; i++) {
            const finger = fingers[i];
            const points = fingerLookupIndices[finger].map((idx) => keypoints[idx]);
            this.drawPath(points, false);
        }
    }

    drawPath(points, closePath) {
        const region = new Path2D();
        region.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            const point = points[i];
            region.lineTo(point.x, point.y);
        }

        if (closePath) {
            region.closePath();
        }
        this.ctx.stroke(region);
    }

    drawPoint(y, x, r) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}
