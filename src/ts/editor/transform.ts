import { writable } from "svelte/store";

export const translateX = writable(0);
export const translateY = writable(0);
export const scale = writable(1);

export type Transform = {
    scale: number;
    translateX: number;
    translateY: number;
}

const localTransform: Transform = {
    scale: 1,
    translateX: 0,
    translateY: 0,
};

translateX.subscribe((tx) => {
    localTransform.translateX = tx;
});

translateY.subscribe((ty) => {
    localTransform.translateY = ty;
});

scale.subscribe((s) => {
    localTransform.scale = s;
});

export function getTransform() {
    return localTransform;
}

export function setTransform(transform: Transform) {
    translateX.set(transform.translateX);
    translateY.set(transform.translateY);
    scale.set(transform.scale);
}
