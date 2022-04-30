import { writable } from "svelte/store";

let localInstances: Instances = {};
export const instances = writable();

instances.set({});

instances.subscribe((insts: Instances) => {
    localInstances = insts;
});

export async function createNode(id, type, position) {
    const component = await import(`../../svelte/nodes/${type}.svelte`);

    instances.update((insts: Instances) => {
        insts[id] = {
            component: component.default,
            inputs: {},
            outputs: {},
            x: position[0],
            y: position[1],
        };
        return insts;
    });
}

export async function addNode(type: string) {
    const keys = Object.keys(localInstances);
    for (let i = 1; i <= keys.length; i++) {
        const id = "midi-node-" + i.toString();
        if (!keys.includes(id)) {
            await createNode(id, type, [0, 0]);
            return;
        }
    }
}

export function createConnection(outputNode, outputName, connection) {
    instances.update((insts) => {
        for (const conn of insts[outputNode].outputs[outputName].connections) {
            if (conn[0] === connection[0] && conn[1] === connection[1]) {
                return insts;
            }
        }
        insts[outputNode].outputs[outputName].connections.add(connection);
        const receiver = insts[connection[0]].inputs[connection[1]].node;
        insts[outputNode].outputs[outputName].node.add(receiver);
        return insts;
    });
}

export function destroyConnection(outputNode, outputName, connection) {
    instances.update((insts) => {
        for (const conn of insts[outputNode].outputs[outputName].connections) {
            console.log(conn, connection);
            if (conn[0] === connection[0] && conn[1] === connection[1]) {
                insts[outputNode].outputs[outputName].connections.delete(conn);
            }
        }
        const receiver = insts[connection[0]].inputs[connection[1]].node;

        for (const input of insts[outputNode].outputs[outputName].node) {
            console.log(input, receiver);
            if (input === receiver) {
                insts[outputNode].outputs[outputName].node.delete(input);
            }
        }

        return insts;
    });
}

export type Instances = {
    [key: string]: {
        component;
        inputs: { [key: string]: GUIInput };
        outputs: { [key: string]: GUIOutput };
        x: number;
        y: number;
    };
};

// example
const nodes = {
    in: {
        type: "midi-input",
        position: [-550, -190],
        connections: {
            MIDI: [["chordExplorer", "MIDI"]],
        },
    },
    out: {
        type: "midi-output",
        position: [550, 65],
        connections: {},
    },
    filter: {
        type: "filter",
        position: [-159, 137],
        connections: {
            MIDI: [
                ["delay", "MIDI"],
                ["out", "MIDI"],
            ],
        },
    },
    delay: {
        type: "delay",
        position: [65, -84],
        connections: {
            MIDI: [["transpose", "MIDI"]],
        },
    },
    transpose: {
        type: "transpose",
        position: [286, -132],
        connections: {
            MIDI: [["out", "MIDI"]],
        },
    },
    chordExplorer: {
        type: "chord-explorer",
        position: [-490, 111],
        connections: {
            MIDI: [["filter", "MIDI"]],
        },
    },
};

async function init() {
    for (const [id, node] of Object.entries(nodes)) {
        await createNode(id, node.type, node.position);
    }

    for (const [id, node] of Object.entries(nodes)) {
        for (const [output, connections] of Object.entries(node.connections)) {
            for (const connection of connections) {
                createConnection(id, output, connection);
            }
        }
    }
}

init();
