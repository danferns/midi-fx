<script lang="ts">
    export let id: string;
    export const inputs = {
        MIDI: {
            call: (status, data1, data2) => {
                if (messageTypes["Note On / Off"](status)) {
                    emit("MIDI", status, data1 + transpose, data2);
                } else {
                    emit("MIDI", status, data1, data2);
                }
            },
        },
    };
    export const outputs = {
        MIDI: new Set(),
    };

    import NodeUI from "../widgets/NodeUI.svelte";
    import Title from "../widgets/Title.svelte";
    import NumericInput from "../widgets/NumericInput.svelte";

    import { highlightOutput } from "../../ts/util/NodeUtil";
    import { messageTypes } from "./filter.svelte";

    let transpose = 0;

    function emit(output, ...data) {
        for (const receiver of outputs[output]) {
            receiver.call(...data);
        }
        highlightOutput(id, output);
    }
</script>

<NodeUI width="150">
    <Title>Transpose</Title>
    <NumericInput bind:value={transpose} />
</NodeUI>
