import { storage } from "../storage";
import { applyPortableInstances, getPortableInstances } from "./instances";

const editorStateStore = new storage.local("editor-state");

export function saveEditorState() {
    const state = getPortableInstances();
    editorStateStore.setValue(JSON.stringify(state));
}

export function isSavedStateAvailable() {
    const state = editorStateStore.getValue();
    return typeof state === "object";
}

export async function loadEditorState() {
    const state = JSON.parse(editorStateStore.getValue());
    if (typeof state === "object") {
        await applyPortableInstances(state);
    }
}