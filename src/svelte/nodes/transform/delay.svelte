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
    Forwards all MIDI messages after a specified duration in milliseconds.
    `;
</script>

<script lang="ts">
    import { createEmitter } from "src/ts/util/NodeUtil";
    export let id: string;
    export const inputs: NodeInputs = {
        MIDI: (status, data1, data2) => {
            setTimeout(() => {
                emit("MIDI", status, data1, data2);
            }, state.millis);
        },
    };
    export const outputs: NodeOutputs = {
        MIDI: new Set(),
    };
    export let state = {
        millis: 1000,
    };

    const emit = createEmitter(id, outputs);

    import NodeUI from "../../widgets/NodeUI.svelte";
    import Title from "../../widgets/info/Title.svelte";
    import NumericInput from "../../widgets/input/NumericInput.svelte";
</script>

<NodeUI width="150">
    <Title>Delay (ms)</Title>
    <NumericInput bind:value={state.millis} />
</NodeUI>
