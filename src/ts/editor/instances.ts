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
    const componentModule = await import(`../../svelte/nodes/${type}.svelte`);

    instances.update((insts: Instances) => {
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
    instances.update((insts: Instances) => {
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
    instances.update((insts: Instances) => {
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
    instances.update((insts: Instances) => {
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
