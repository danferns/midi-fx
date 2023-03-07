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
<script lang="ts">
    export const inputs: NodeInputs = {
        MIDI: (status, data1, data2) => {
            const message = [status ? status : runningStatus];
            if (typeof data1 === "number") message.push(data1);
            if (typeof data1 === "number" && typeof data2 === "number") message.push(data2);
            activeOutput?.send(message);
            runningStatus = status ? status : runningStatus;
        },
    };

    import NodeUI from "../widgets/NodeUI.svelte";
    import Title from "../widgets/info/Title.svelte";
    import DropDown from "../widgets/input/DropDown.svelte";

    import { storage } from "src/ts/storage";
    import { onMount, tick, createEventDispatcher } from "svelte";
    import { Output, WebMidi } from "webmidi";

    let activeOutput: Output;
    var runningStatus;

    const dispatch = createEventDispatcher();

    let outputNames: Array<string> = [];
    let activeOutputName: string;

    onMount(async () => {
        await WebMidi.enable();
        WebMidi.addListener("portschanged", updateOutputs);
        updateOutputs();
    });

    async function updateOutputs() {
        const newOutputNames = [];
        const outputs = WebMidi.outputs;
        for (const output of outputs) {
            newOutputNames.push(output.name);
        }
        outputNames = newOutputNames;
        const lastOutput = await outputStore.getValue();
        if (outputNames.includes(lastOutput)) {
            changeOutput(lastOutput);
        }
        await tick();
        dispatch("resize", {});
    }

    const outputStore = new storage.local("output");

    function onOutputChange(e: Event) {
        const selection = e.target as HTMLSelectElement;
        blurTarget(selection);
        changeOutput(selection.value);
        outputStore.setValue(selection.value);
    }

    function changeOutput(name: string) {
        activeOutputName = name;
        activeOutput = WebMidi.getOutputByName(name);
    }

    function blurTarget(target: HTMLSelectElement) {
        target.blur();
    }
</script>

<NodeUI>
    <Title>Output Device</Title>
    <DropDown bind:value={activeOutputName} on:change={onOutputChange} options={outputNames} />
</NodeUI>
