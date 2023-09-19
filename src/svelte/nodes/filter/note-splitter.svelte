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
    export const doc = `Splits "note on" and "note off" events into separate outputs.
    Other MIDI messages do not pass through this node.`;

    export function isNoteOn(status: number, data1: number, data2: number) {
        if (status >= 144 && status < 160 && data2 !== 0) return true;
        else return false;
    }

    export function isNoteOff(status: number, data1: number, data2: number) {
        if (status >= 128 && status < 144) return true;
        else if (status >= 144 && status <= 159 && data2 === 0) return true;
        else return false;
    }
</script>

<script lang="ts">
    import { createEmitter } from "src/ts/util/NodeUtil";
    import NodeUi from "../../widgets/NodeUI.svelte";
    import Title from "../../widgets/info/Title.svelte";
    export let id: string;
    export const inputs: NodeInputs = {
        MIDI: (status, data1, data2) => {
            if (isNoteOn(status, data1, data2)) {
                emit("Note On", status, data1, data2);
            } else if (isNoteOff(status, data1, data2)) {
                emit("Note Off", status, data1, data2);
            }
        },
    };
    export const outputs: NodeOutputs = {
        "Note On": new Set(),
        "Note Off": new Set(),
    };
    const emit = createEmitter(id, outputs);
</script>

<NodeUi><Title>Splitter</Title></NodeUi>
