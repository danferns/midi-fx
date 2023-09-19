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
    Scales the velocity of note on / off MIDI messages.
    `;
</script>

<script lang="ts">
    import { createEmitter } from "src/ts/util/NodeUtil";
    import Knob from "../../widgets/input/Knob.svelte";
    import NodeUi from "../../widgets/NodeUI.svelte";
    import { messageTypes } from "../filter/filter.svelte";
    export let id: string;
    export const inputs: NodeInputs = {
        MIDI: (status, data1, data2) => {
            if (messageTypes["Note On / Off"](status)) {
                const scaledLevel = Math.floor(data2 * state.level) / 100;
                emit("MIDI", status, data1, scaledLevel);
            } else {
                emit("MIDI", status, data1, data2);
            }
        },
    };
    export const outputs: NodeOutputs = {
        MIDI: new Set(),
    };
    export let state = {
        level: 100,
    };
    const emit = createEmitter(id, outputs);
</script>

<div>
    <Knob bind:percent={state.level} size={120} onReset={() => 100} />
</div>

<style>
    div {
        padding: 16px;
    }
</style>
