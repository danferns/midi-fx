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
    import { createEmitter } from "src/ts/util/NodeUtil";
    export let id: string;
    export const inputs: NodeInputs = {
        MIDI: (status, data1, data2) => {
            if (messageTypes["Note On / Off"](status)) {
                const transposedNote = data1 + state.transpose;
                if (transposedNote > 0 && transposedNote < 127) {
                    emit("MIDI", status, transposedNote, data2);
                }
            } else {
                emit("MIDI", status, data1, data2);
            }
        },
    };
    export const outputs: NodeOutputs = {
        MIDI: new Set(),
    };
    export let state = {
        transpose: 0,
    };

    const emit = createEmitter(id, outputs);

    import NodeUI from "../../widgets/NodeUI.svelte";
    import Title from "../../widgets/info/Title.svelte";
    import NumericInput from "../../widgets/input/NumericInput.svelte";

    import { messageTypes } from "../filter/filter.svelte";
</script>

<NodeUI width="150">
    <Title>Transpose</Title>
    <NumericInput bind:value={state.transpose} />
</NodeUI>
