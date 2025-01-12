import { FilesetResolver, HandLandmarker } from "@mediapipe/tasks-vision";

export let handLandmarker: HandLandmarker;

export async function setupLandmarker() {
    const vision = await FilesetResolver.forVisionTasks(
        // path/to/wasm/root
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );

    handLandmarker = await HandLandmarker.createFromOptions(vision, {
        baseOptions: {
            modelAssetPath: "./nodes/hand_landmarker.task",
            delegate: "GPU",
        },
        numHands: 2,
    });

    await handLandmarker.setOptions({ runningMode: "VIDEO", numHands: 2 });
}
