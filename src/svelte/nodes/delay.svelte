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

    import NodeUI from "../widgets/NodeUI.svelte";
    import Title from "../widgets/Title.svelte";
    import NumericInput from "../widgets/NumericInput.svelte";
</script>

<NodeUI width="150">
    <Title>Delay (ms)</Title>
    <NumericInput bind:value={state.millis} />
</NodeUI>
