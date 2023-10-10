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

import type { SvelteComponent } from "svelte";

// A mapping from node-types to their Titles.
// Defined as per folder structure.
export const NODES = {
    io: {
        "midi-input": "External Input",
        "midi-output": "External Output",
        "typing-keyboard": "Typing Keyboard",
        "serial-input": "Serial Input",
        "virtual-piano": "Virtual Piano",
        "p2p-webrtc": "Peer To Peer",
        "hand-tracker": "Hand Tracker",
    },
    filter: {
        filter: "Filter",
        "note-splitter": "Note Splitter",
    },
    transform: {
        delay: "Delay",
        transpose: "Transpose",
        scale: "Scale",
        "channel-mapper": "Channel Mapper",
        "velocity-to-cc": "Velocity to CC",
    },
    analyze: {
        "chord-explorer": "Chord Explorer",
        "cc-visualizer": "CC Visualizer",
        "message-logger": "Message Logger",
    },
    interactive: {
        "chord-trainer": "Chord Trainer",
    },
};

/**
 * Import the Svelte component of a given node.
 * @param nodeType the type of node to import. eg. `midi-input`.
 * @returns Promise of Svelte component of the node.
 */
export async function importNodeComponent(nodeType: string): Promise<SvelteComponent> {
    for (const category of Object.keys(NODES)) {
        if (Object.keys(NODES[category]).includes(nodeType)) {
            return await import(`../../svelte/nodes/${category}/${nodeType}.svelte`);
        }
    }
    throw `Node '${nodeType}' not found.`;
}

/**
 * Get the display title string of a node.
 * @param nodeType the type of the node. eg. `midi-input`.
 * @returns Title of the node
 */
export function getNodeTitle(nodeType: string): string {
    for (const category of Object.keys(NODES)) {
        if (Object.keys(NODES[category]).includes(nodeType)) {
            return NODES[category][nodeType];
        }
    }
    throw `Node '${nodeType}' not found.`;
}
