<script lang="ts">
    import { createEmitter } from "../../ts/util/NodeUtil";
    export let id: string;
    export const inputs: NodeInputs = {
        MIDI: (status, data1, data2) => {
            if (messageTypes["Note On / Off"](status)) {
                const transposedNote = data1 + transpose;
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
