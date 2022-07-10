<script lang="ts">
    import { createEmitter } from "src/ts/util/NodeUtil";
    export let id: string;
    export const inputs: NodeInputs = {
        MIDI: (status, data1, data2) => {
            setTimeout(() => {
                emit("MIDI", status, data1, data2);
            }, millis);
        },
    };
    export const outputs: NodeOutputs = {
        MIDI: new Set(),
    };

    const emit = createEmitter(id, outputs);

    import NodeUI from "../widgets/NodeUI.svelte";
    import Title from "../widgets/Title.svelte";
    import NumericInput from "../widgets/NumericInput.svelte";

    let millis = 1000;
</script>

<NodeUI width="150">
    <Title>Delay (ms)</Title>
    <NumericInput bind:value={millis} />
</NodeUI>
