import { writable } from "svelte/store";

export const instances = writable();

instances.set({});

export async function createNode(id, type, position) {
    const component = await import(`../../svelte/nodes/${type}.svelte`);

    const guiInputs = {};
    const guiOutputs = {};

    for (const [name, input] of Object.entries(component.inputs)) {
        guiInputs[name] = {
            node: input as NodeInput,
        };
    }

    for (const [name, output] of Object.entries(component.outputs)) {
        guiOutputs[name] = {
            node: output as NodeOutput,
            connections: new Set(),
        };
    }

    instances.update((insts: Instances) => {
        insts[id] = {
            component: component.default,
            inputs: guiInputs,
            outputs: guiOutputs,
            x: position[0],
            y: position[1],
        };
        return insts;
    });
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
        position: [-550, 46],
        connections: {
            MIDI: [["filter", "MIDI"]],
        },
    },
    out: {
        type: "midi-output",
        position: [447, 65],
        connections: {},
    },
    filter: {
        type: "filter",
        position: [-189, 18],
        connections: {
            MIDI: [["delay", "MIDI"], ["out", "MIDI"]]
        },
    },
    delay:  {
        type: "delay",
        position: [159, -148],
        connections: {
            MIDI: [["out", "MIDI"]]
        }
    }
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
