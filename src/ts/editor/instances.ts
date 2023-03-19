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
import { importNodeComponent } from "../nodes/nodes";

let localInstances: LiveInstances = {};
export const instances = writable();

instances.set({});

instances.subscribe((insts: LiveInstances) => {
    localInstances = insts;
});

export async function createNode(
    id: string,
    type: string,
    position: [number, number],
    state: { [key: string]: unknown } | undefined = undefined
) {
    const componentModule = await importNodeComponent(type);

    instances.update((insts: LiveInstances) => {
        insts[id] = {
            type: type,
            component: componentModule.default,
            inputs: {},
            outputs: {},
            x: position[0],
            y: position[1],
            state: state,
        };
        return insts;
    });
}

export async function addNode(type: string, position: [number, number] = [0, 0]) {
    const keys = Object.keys(localInstances);
    for (let i = 1; i <= keys.length + 1; i++) {
        const id = "midi-node-" + i.toString();
        if (!keys.includes(id)) {
            await createNode(id, type, position);
            return;
        }
    }
}

export function destroyNode(id: string) {
    instances.update((insts: LiveInstances) => {
        // destroy any connections to this node
        for (const instance of Object.values(insts)) {
            for (const output of Object.values(instance.outputs)) {
                for (const connection of output.connections) {
                    if (connection[0] === id) {
                        output.connections.delete(connection);
                    }
                }
            }
        }

        delete insts[id];
        return insts;
    });
}

export function createConnection(outputNode: string, outputName: string, connection: Connection) {
    instances.update((insts: LiveInstances) => {
        const output = insts[outputNode].outputs[outputName];
        const input = insts[connection[0]].inputs[connection[1]].node;

        for (const conn of output.connections) {
            // check if this connection already exists
            if (conn[0] === connection[0] && conn[1] === connection[1]) {
                return insts;
            }
        }

        output.connections.add(connection);
        output.node.add(input);
        return insts;
    });
}

export function destroyConnection(outputNode: string, outputName: string, connection: Connection) {
    instances.update((insts: LiveInstances) => {
        const output = insts[outputNode].outputs[outputName];
        const input = insts[connection[0]].inputs[connection[1]];

        for (const conn of output.connections) {
            if (conn[0] === connection[0] && conn[1] === connection[1]) {
                output.connections.delete(conn);
            }
        }

        for (const connectedInput of output.node) {
            if (connectedInput === input.node) {
                output.node.delete(connectedInput);
            }
        }

        return insts;
    });
}

export async function applyPortableInstances(portableInstances: PortableInstances) {
    // start by resetting the live instances
    instances.set({});

    for (const [id, node] of Object.entries(portableInstances)) {
        await createNode(id, node.type, node.position, node.state);
    }

    for (const [id, node] of Object.entries(portableInstances)) {
        for (const [output, connections] of Object.entries(node.connections)) {
            for (const connection of connections) {
                createConnection(id, output, connection);
            }
        }
    }
}

export function getPortableInstances() {
    const jsonNodes: PortableInstances = {};

    for (const [id, instance] of Object.entries(localInstances)) {
        jsonNodes[id] = {
            type: instance.type,
            position: [instance.x, instance.y],
            connections: {},
            state: instance.state,
        };

        for (const [outputName, output] of Object.entries(instance.outputs)) {
            for (const connection of output.connections.values()) {
                (jsonNodes[id].connections[outputName] ??= []).push(connection);
            }
        }
    }

    return jsonNodes;
}
