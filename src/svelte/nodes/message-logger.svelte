<script lang="ts">
    import { createEmitter } from "src/ts/util/NodeUtil";
    import Button from "../widgets/Button.svelte";
    import HorizontalLayout from "../widgets/HorizontalLayout.svelte";
    import NodeUi from "../widgets/NodeUI.svelte";
    import Table from "../widgets/Table.svelte";
    import Title from "../widgets/Title.svelte";
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
    <Title>Message Logs</Title>
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
