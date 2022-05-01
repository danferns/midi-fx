import { storage } from "../storage";
import { applyPortableInstances, getPortableInstances } from "./instances";

const editorStateStore = new storage.local("editor-state");

export function saveEditorState() {
    const state = getPortableInstances();
    editorStateStore.setValue(JSON.stringify(state));
}

export function isSavedStateAvailable() {
    const state = editorStateStore.getValue();
    return state !== "";
}

export async function loadEditorState() {
    const state = JSON.parse(editorStateStore.getValue());
    if (typeof state === "object") {
        await applyPortableInstances(state);
    }
}

export async function loadBuiltInPreset(presetName: string) {
    const json = await fetch(`./presets/${presetName}.json`).then((res) => res.json());
    await applyPortableInstances(json);
}
