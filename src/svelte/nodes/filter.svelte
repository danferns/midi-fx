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
    export const messageTypes = {
        "Note On / Off": (status) => {
            if (status >= 128 && status <= 159) return true;
            else return false;
        },
        "Polyphonic Aftertouch": (status) => {
            if (status >= 160 && status <= 175) return true;
            else return false;
        },
        "Control / Mode Change": (status) => {
            if (status >= 176 && status <= 191) return true;
            else return false;
        },
        "Program Change": (status) => {
            if (status >= 192 && status <= 207) return true;
            else return false;
        },
        "Channel Aftertouch": (status) => {
            if (status >= 208 && status <= 223) return true;
            else return false;
        },
        "Pitch Bend Change": (status) => {
            if (status >= 224 && status <= 239) return true;
            else return false;
        },
        Transport: (status) => {
            // Song Position Pointer, Song Select, Start, Continue, Stop
            if ([242, 243, 250, 251, 252].includes(status)) return true;
            else return false;
        },
    };
</script>

<script lang="ts">
    import { createEmitter } from "src/ts/util/NodeUtil";
    export let id: string;
    export const inputs: NodeInputs = {
        MIDI: (status, data1, data2) => {
            for (const messageType of state.passThrough) {
                if (messageTypes[messageType](status)) {
                    emit("MIDI", status, data1, data2);
                    return;
                }
            }
        },
    };
    export const outputs: NodeOutputs = {
        MIDI: new Set(),
    };
    export let state = {
        passThrough: [],
    };

    const emit = createEmitter(id, outputs);

    import NodeUI from "../widgets/NodeUI.svelte";
    import LabelledCheckBox from "../widgets/LabelledCheckBox.svelte";
</script>

<NodeUI>
    {#each Object.keys(messageTypes) as messageType}
        <LabelledCheckBox bind:group={state.passThrough} name={messageType} />
    {/each}
</NodeUI>
