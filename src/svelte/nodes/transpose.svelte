<script lang="ts">
    import { createEmitter } from "../../ts/util/NodeUtil";
    export let id: string;
    export const inputs: NodeInputs = {
        MIDI: (status, data1, data2) => {
            if (messageTypes["Note On / Off"](status)) {
                emit("MIDI", status, data1 + transpose, data2);
            } else {
                emit("MIDI", status, data1, data2);
            }
        },
    };
    export const outputs: NodeOutputs = {
        MIDI: new Set(),
    };

    const emit = createEmitter(id, outputs);

    import NodeUI from "../widgets/NodeUI.svelte";
    import Title from "../widgets/Title.svelte";
    import NumericInput from "../widgets/NumericInput.svelte";

    import { messageTypes } from "./filter.svelte";

    let transpose = 0;
</script>

<NodeUI width="150">
    <Title>Transpose</Title>
    <NumericInput bind:value={transpose} />
</NodeUI>
