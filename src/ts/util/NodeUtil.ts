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
