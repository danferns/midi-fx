import { storage } from "../storage";
import { applyPortableInstances, getPortableInstances, PortableInstances } from "./instances";
import { getTransform, setTransform, Transform } from "./transform";

export type State = {
    instances: PortableInstances;
    transform?: Transform;
};

const editorStateStore = new storage.local("editor-state");

export function saveEditorState() {
    const state: State = {
        instances: getPortableInstances(),
        transform: getTransform(),
    };
    editorStateStore.setValue(JSON.stringify(state));
}

export function isSavedStateAvailable() {
    const state = editorStateStore.getValue();
    return state && state !== "";
}

export async function loadEditorState() {
    const state: State = JSON.parse(editorStateStore.getValue());
    if (isStateValid(state)) {
        if (state.transform) setTransform(state.transform);
        await applyPortableInstances(state.instances);
    }
}

export async function loadBuiltInPreset(presetName: string) {
    const state = await fetch(`./presets/${presetName}.json`).then((res) => res.json());
    if (isStateValid(state)) {
        if (state.transform) setTransform(state.transform);
        await applyPortableInstances(state.instances);
    }
}

function isStateValid(state: State) {
    if (typeof state === "object" && state !== null) {
        if (
            typeof state.instances === "object" &&
            (state.transform === undefined || typeof state.transform === "object")
        ) {
            return true;
        }
    }

    return false;
}
