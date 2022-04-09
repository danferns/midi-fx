import { Input, Output, WebMidi } from "webmidi";

export async function init() {
    await WebMidi.enable();
    const inputs = WebMidi.inputs;
    const outputs = WebMidi.outputs;
    return { inputs: inputs, outputs: outputs };
}

let activeInput: Input | undefined;
export let activeOutput: Output | undefined;

export function setInput(inputName) {
    activeInput?.removeListener("midimessage", onMidiMessageEvent);
    activeInput = WebMidi.getInputByName(inputName);
    activeInput.addListener("midimessage", onMidiMessageEvent);
}

function onMidiMessageEvent(e) {
    for (const callback of onInputCallbacks) {
        callback(e, activeOutput);
    }
}

const onInputCallbacks: Array<Function> = [];

export function onInput(callback) {
    onInputCallbacks.push(callback);
}

export function setOutput(outputName) {
    activeOutput = WebMidi.getOutputByName(outputName);
}
