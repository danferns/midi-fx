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

import { instances } from "../editor/instances";

async function highlightOutput(nodeId, output) {
    instances.update((insts) => {
        if (insts) insts[nodeId].outputs[output].active = true;
        return insts;
    });
    await wait(0);
    instances.update((insts) => {
        if (insts) insts[nodeId].outputs[output].active = false;
        return insts;
    });
}

export function createEmitter(id: string, outputs: { [key: string]: NodeOutput }) {
    return (output: string, status: number, data1: number, data2: number) => {
        for (const receiver of outputs[output]) {
            receiver(status, data1, data2);
        }
        highlightOutput(id, output);
    };
}

function wait(millis) {
    return new Promise((resolve) => {
        setTimeout(resolve, millis);
    });
}
