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
    export const doc: string = `
    Receives MIDI messages from an external MIDI device.
    `;
</script>

<script lang="ts">
    import { createEmitter } from "src/ts/util/NodeUtil";
    export let id: string;
    export const outputs: NodeOutputs = {
        MIDI: new Set(),
    };

    const emit = createEmitter(id, outputs);

    import NodeUI from "../../widgets/NodeUI.svelte";
    import DropDown from "../../widgets/input/DropDown.svelte";

    import { storage } from "src/ts/storage";
    import { onMount, createEventDispatcher, tick } from "svelte";
    import { Input, WebMidi, Message } from "webmidi";

    const dispatch = createEventDispatcher();

    let inputNames: Array<string> = [];
    let activeInput: Input;
    let activeInputName: string;

    onMount(async () => {
        await WebMidi.enable();
        WebMidi.addListener("portschanged", updateInputs);
        updateInputs();
    });

    async function updateInputs() {
        const newInputNames = [];
        const inputs = WebMidi.inputs;
        for (const input of inputs) {
            newInputNames.push(input.name);
        }
        inputNames = newInputNames;
        const lastInput = await inputStore.getValue();
        if (inputNames.includes(lastInput)) {
            changeInput(lastInput);
        }
        await tick();
        dispatch("resize", {});
    }

    const inputStore = new storage.local("input");

    function onInputChange(e: Event) {
        const selection = e.target as HTMLSelectElement;
        blurTarget(selection);
        changeInput(selection.value);
        inputStore.setValue(selection.value);
    }

    function changeInput(name: string) {
        activeInputName = name;
        activeInput?.removeListener("midimessage", onInput);
        activeInput = WebMidi.getInputByName(name);
        activeInput.addListener("midimessage", onInput);
    }

    function onInput(event) {
        const message = event.message as Message;
        const status = message.data[0];
        const data1 = message.rawDataBytes[0];
        const data2 = message.rawDataBytes[1];
        emit("MIDI", status, data1, data2);
    }

    function blurTarget(target: HTMLSelectElement) {
        target.blur();
    }
</script>

<NodeUI>
    <DropDown bind:value={activeInputName} options={inputNames} on:change={onInputChange} />
</NodeUI>
