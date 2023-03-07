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
    import NodeUi from "../../widgets/NodeUI.svelte";
    import { createEmitter } from "src/ts/util/NodeUtil";
    import Title from "../../widgets/info/Title.svelte";
    import NumericInput from "../../widgets/input/NumericInput.svelte";
    import TimeSeries from "../../widgets/data/TimeSeries.svelte";
    export let id: string;
    export const inputs: NodeInputs = {
        MIDI: (status, data1, data2) => {
            if (status >= 0xb0 && status <= 0xbf) {
                if (state.cc == -1) {
                    state.cc = data1;
                }
                if (data1 == state.cc) {
                    lastValue = data2;
                }
            }
            emit("MIDI", status, data1, data2);
        },
    };
    export const outputs: NodeOutputs = {
        MIDI: new Set(),
    };
    export let state = {
        cc: -1,
    };
    const emit = createEmitter(id, outputs);
    let lastValue = 0;
</script>

<NodeUi>
    <Title>CC Visualizer</Title>
    <NumericInput bind:value={state.cc} />
    <TimeSeries height={200} width={400} bind:lastValue />
</NodeUi>
