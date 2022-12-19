import { storage } from "../storage";
import { applyPortableInstances, getPortableInstances } from "./instances";
import { getTransform, setTransform } from "./transform";

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

export async function clearEditorState() {
    setTransform({ translateX: 0, translateY: 0, scale: 1 });
    await applyPortableInstances({});
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

export function saveEditorStateAsFile() {
    const state: State = {
        instances: getPortableInstances(),
        transform: getTransform(),
    };
    const data = JSON.stringify(state);
    saveAsFile(data, "Preset.midi-fx");
}

export function loadEditorStateFromFile(file: File) {
    const reader = new FileReader();
    reader.onload = async (e) => {
        const state: State = JSON.parse(e.target.result as string);
        if (isStateValid(state)) {
            if (state.transform) setTransform(state.transform);
            await applyPortableInstances(state.instances);
        }
    };
    reader.readAsText(file);
}

export function openEditorStateFilePicker() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".midi-fx";
    input.onchange = () => {
        if (input.files) loadEditorStateFromFile(input.files[0]);
    };
    input.click();
}

function saveAsFile(data: string, filename: string) {
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.download = filename;
    link.href = url;
    link.click();
}
