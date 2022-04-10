import { instances } from "../editor/instances";

export async function highlightOutput(nodeId, output) {
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

function wait(millis) {
    return new Promise(resolve => {
        setTimeout(resolve, millis);
    })
}