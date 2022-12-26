<script lang="ts">
    import { createEmitter } from "src/ts/util/NodeUtil";
    import Button from "../widgets/Button.svelte";
    import NodeUi from "../widgets/NodeUI.svelte";
    import Table from "../widgets/Table.svelte";
    import Title from "../widgets/Title.svelte";
    export let id: string;
    export const inputs: NodeInputs = {
        MIDI: (status, data1, data2) => {
            messageArray.unshift([status, data1, data2]);
            if (messageArray.length > state.maxItems)
                messageArray = messageArray.slice(0, state.maxItems);
            else messageArray = messageArray;
            emit("MIDI", status, data1, data2);
        },
    };
    export const outputs: NodeOutputs = {
        MIDI: new Set(),
    };
    export let state = {
        maxItems: 1,
    };
    const emit = createEmitter(id, outputs);

    let messageArray: [number, number, number][] = [];
</script>

<NodeUi width={300}>
    <Title>Message Logs</Title>
    <Button
        on:click={() => {
            messageArray = [];
        }}>Clear All</Button
    >
</NodeUi>
<NodeUi>
    <Table tableData={messageArray} tableHeaders={["Status", "Data 1", "Data 2"]} />
</NodeUi>
