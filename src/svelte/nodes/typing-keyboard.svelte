<!--

    Copyright (C) 2022 Daniel Fernandes

    This file is part of MIDI-FX.

    MIDI-FX is free software: you can redistribute it and/or modify it
    under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    MIDI-FX is distributed in the hope that it will be useful, but
    WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
    General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with MIDI-FX. If not, see <https://www.gnu.org/licenses/>.

-->
<script lang="ts" context="module">
    const keymaps = {
        Default: "default",
        Chromatic: "chromatic",
    };
</script>

<script lang="ts">
    import { createEmitter } from "src/ts/util/NodeUtil";
    import DropDown from "../widgets/input/DropDown.svelte";
    import NodeUi from "../widgets/NodeUI.svelte";
    import Title from "../widgets/info/Title.svelte";
    import { boundValue } from "src/ts/util/MathUtil";

    export let id: string;
    export const inputs: NodeInputs = {};
    export const outputs: NodeOutputs = {
        MIDI: new Set(),
    };
    export let state = {
        mapping: "Default",
        transpose: 0,
    };
    const emit = createEmitter(id, outputs);

    const activeKeys = new Set<string>();
    let mappingData: {
        notes: {
            [key: string]: number;
        };
        transpose: {
            [key: string]: number;
        };
    };

    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyUp);
    window.addEventListener("blur", clearActiveKeys);

    function onKeydown(e: KeyboardEvent) {
        if (e.repeat) return;
        const key = e.code.startsWith("Key") ? e.key : e.code;
        if (activeKeys.has(key)) return;
        if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) return;

        if (Object.keys(mappingData.notes).includes(key)) {
            activeKeys.add(key);
            const note = mappingData.notes[key] + state.transpose;
            if (note >= 0 && note <= 127) emit("MIDI", 144, note, 127);
        } else if (Object.keys(mappingData.transpose).includes(key)) {
            clearActiveKeys();
            state.transpose = boundValue(state.transpose + mappingData.transpose[key], -127, 127);
        }
    }

    function onKeyUp(e: KeyboardEvent) {
        const key = e.code.startsWith("Key") ? e.key : e.code;
        if (!activeKeys.has(key)) return;

        activeKeys.delete(key);
        if (Object.keys(mappingData.notes).includes(key)) {
            const note = mappingData.notes[key] + state.transpose;
            if (note >= 0 && note <= 127) emit("MIDI", 144, note, 0);
        }
    }

    function clearActiveKeys() {
        for (const key of activeKeys) {
            emit("MIDI", 144, mappingData.notes[key] + state.transpose, 0);
        }
        activeKeys.clear();
    }

    async function setMapping(filename: string) {
        const file = "./keymaps/" + filename + ".json";
        mappingData = await fetch(file)
            .then((response) => {
                if (!response.ok) throw new Error("HTTP error " + response.status);
                return response.json();
            })
            .catch(async (error) => {
                throw new Error("Error loading mapping: " + error.message);
            });
    }

    function openMappingFile() {
        const link = document.createElement("a");
        link.target = "_blank";
        link.href = "./keymaps/" + keymaps[state.mapping] + ".json";
        link.click();
    }

    // workaround to prevent setMapping() to be called each time global state updates.
    let activeMapping;
    $: {
        if (state.mapping !== activeMapping) {
            activeMapping = state.mapping;
        }
    }
</script>

<NodeUi width="200">
    <Title on:dblclick={openMappingFile}>Typing Keyboard</Title>
    <DropDown bind:value={state.mapping} options={Object.keys(keymaps)} />
    {#await setMapping(keymaps[activeMapping])}
        <Title>loading...</Title>
    {:then m}
        <Title>
            Transpose: {Math.floor(state.transpose / 12) * 12} + {(state.transpose + 120) % 12}
        </Title>
    {/await}
</NodeUi>
