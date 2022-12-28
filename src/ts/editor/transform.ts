/*
 * Copyright (C) 2022 Daniel Fernandes
 *
 * This file is part of MIDI-FX.
 *
 * MIDI-FX is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * MIDI-FX is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with MIDI-FX. If not, see <https://www.gnu.org/licenses/>.
 */

import { writable } from "svelte/store";

export const translateX = writable(0);
export const translateY = writable(0);
export const scale = writable(1);

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

export function displayToEditorCoords({ x, y }: Point) {
    return {
        x: (x - localTransform.translateX) / localTransform.scale,
        y: (y - localTransform.translateY) / localTransform.scale,
    };
}
