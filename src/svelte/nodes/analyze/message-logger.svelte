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
    export const doc: string = `Logs all MIDI messages received at its input.`;
</script>

<script lang="ts">
    import { createEmitter } from "src/ts/util/NodeUtil";
    import Button from "../../widgets/input/Button.svelte";
    import HorizontalLayout from "../../widgets/layout/HorizontalLayout.svelte";
    import NodeUi from "../../widgets/NodeUI.svelte";
    import Table from "../../widgets/data/Table.svelte";
    export let id: string;
    export const inputs: NodeInputs = {
        MIDI: (status, data1, data2) => {
            messageArray.unshift([status, data1, data2]);
            messageArray = messageArray;
            emit("MIDI", status, data1, data2);
        },
    };
    export const outputs: NodeOutputs = {
        MIDI: new Set(),
    };
    const emit = createEmitter(id, outputs);

    let messageArray: [number, number, number][] = [];

    function copyToClipboard() {
        const text = messageArray.map((message) => message.join(",")).join("\n");
        navigator.clipboard.writeText(text);
    }
</script>

<NodeUi width={300}>
    <HorizontalLayout>
        <Button
            on:click={() => {
                messageArray = [];
            }}>Clear All</Button
        >
        <Button on:click={copyToClipboard}>Copy</Button>
    </HorizontalLayout>
</NodeUi>
<NodeUi>
    <Table tableData={messageArray} tableHeaders={["Status", "Data 1", "Data 2"]} />
</NodeUi>
