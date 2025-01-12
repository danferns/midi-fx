import { boundValue } from "src/ts/util/MathUtil";
import vec3, { Vec3 } from "vec3";
import { HandLandmarkerResult, Landmark } from "@mediapipe/tasks-vision";
import { fingerLookupIndices } from "./camera";

export function processHandOpenGesture(result: HandLandmarkerResult) {
    const values = [];
    for (let i = 0; i < result.handedness.length; i++) {
        let openValue = getHandOpenedValue(result, i);
        openValue = Math.pow(openValue, 2) * 1.1;
        openValue = boundValue(openValue, 0, 1);
        values.push(openValue);
    }
    return values;
}

function getHandOpenedValue(result: HandLandmarkerResult, index: number) {
    let avgDotProductHand = 0;
    const points = result.worldLandmarks[index];
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

export function processHandDirectionGesture(result: HandLandmarkerResult) {
    const values = [];
    for (let i = 0; i < result.handedness.length; i++) {
        let dirValue = getHandDirectionValue(result, i);
        dirValue = dirValue * 0.5 + 0.5;
        if (result.handedness[i][0].categoryName === "Right") {
            dirValue = 1 - dirValue;
        }
        dirValue = boundValue(dirValue, 0, 1);
        values.push(dirValue);
    }
    return values;
}

function getHandDirectionValue(result: HandLandmarkerResult, index: number) {
    const points = result.worldLandmarks[index];
    const wrist = getVec3ForIndex(points, 0);
    const indexBase = getVec3ForIndex(points, fingerLookupIndices.indexFinger[1]);
    const pinkyBase = getVec3ForIndex(points, fingerLookupIndices.pinky[1]);

    const wristIndex = indexBase.minus(wrist).normalize();
    const wristPinky = pinkyBase.minus(wrist).normalize();

    const palmVector = wristIndex.cross(wristPinky);
    return palmVector.normalize().dot(new Vec3(0, 0, 1));
}

function getVec3ForIndex(points: Landmark[], index: number) {
    return vec3({ z: 0, ...points[index] });
}
