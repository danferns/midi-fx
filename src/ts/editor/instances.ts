import { writable } from "svelte/store";

let localInstances: Instances = {};
export const instances = writable();

instances.set({});

instances.subscribe((insts: Instances) => {
    localInstances = insts;
});

export async function createNode(
    id: string,
    type: string,
    position: [number, number],
    state: { [key: string]: unknown } | undefined = undefined
) {
    const component = await import(`../../svelte/nodes/${type}.svelte`);

    instances.update((insts: Instances) => {
        insts[id] = {
            type: type,
            component: component.default,
            inputs: {},
            outputs: {},
            x: position[0],
            y: position[1],
            state: state,
        };
        return insts;
    });
}

export async function addNode(type: string) {
    const keys = Object.keys(localInstances);
    for (let i = 1; i <= keys.length + 1; i++) {
        const id = "midi-node-" + i.toString();
        if (!keys.includes(id)) {
            await createNode(id, type, [0, 0]);
            return;
        }
    }
}

export function destroyNode(id: string) {
    instances.update((insts: Instances) => {
        // destroy any connections to this node
        for (const instance of Object.keys(insts)) {
            for (const output of Object.keys(insts[instance].outputs)) {
                for (const connection of insts[instance].outputs[output].connections) {
                    if (connection[0] === id) {
                        insts[instance].outputs[output].connections.delete(connection);
                    }
                }
            }
        }

        delete insts[id];
        return insts;
    });
}

export function createConnection(
    outputNode: string,
    outputName: string,
    connection: [string, string]
) {
    instances.update((insts) => {
        for (const conn of insts[outputNode].outputs[outputName].connections) {
            // check if this connection already exists
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

export function destroyConnection(
    outputNode: string,
    outputName: string,
    connection: [string, string]
) {
    instances.update((insts) => {
        for (const conn of insts[outputNode].outputs[outputName].connections) {
            if (conn[0] === connection[0] && conn[1] === connection[1]) {
                insts[outputNode].outputs[outputName].connections.delete(conn);
            }
        }
        const receiver = insts[connection[0]].inputs[connection[1]].node;

        for (const input of insts[outputNode].outputs[outputName].node) {
            if (input === receiver) {
                insts[outputNode].outputs[outputName].node.delete(input);
            }
        }

        return insts;
    });
}

export type Instances = {
    [key: string]: {
        type: string;
        component;
        inputs: { [key: string]: GUIInput };
        outputs: { [key: string]: GUIOutput };
        x: number;
        y: number;
        state: { [key: string]: unknown } | undefined;
    };
};

export type PortableInstances = {
    [key: string]: {
        type: string;
        position: [number, number];
        connections: {
            [key: string]: [string, string][];
        };
        state: { [key: string]: unknown };
    };
};

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
