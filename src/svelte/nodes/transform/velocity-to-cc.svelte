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
    Emits Control Change (CC) messages based on the velocity of incoming node on messages.
    Some smoothing is applied to the output to avoid sudden jumps in the CC value.
    `;
</script>

<script lang="ts">
    import { createEmitter } from "src/ts/util/NodeUtil";
    import NodeUi from "../../widgets/NodeUI.svelte";
    import NumericInput from "../../widgets/input/NumericInput.svelte";
    import { isNoteOn } from "../filter/note-splitter.svelte";
    export let id: string;
    export const inputs: NodeInputs = {
        MIDI: (status, data1, data2) => {
            if (isNoteOn(status, data1, data2)) {
                targetValue = data2;
            }
        },
    };
    export const outputs: NodeOutputs = {
        MIDI: new Set(),
    };
    export let state = {
        cc: 0,
    };
    const emit = createEmitter(id, outputs);

    let weight = 0.2; // affects how slowly the value changes

    let targetValue = 0,
        value = 0;

    function sendMessage() {
        if (Math.round(value) !== targetValue) {
            value += (targetValue - value) / (weight * 50);
            emit("MIDI", 0xb0, state.cc, value);
        }
        setTimeout(sendMessage, 1000 / 50);
    }

    sendMessage();
</script>

<NodeUi>
    <NumericInput bind:value={state.cc} />
</NodeUi>
