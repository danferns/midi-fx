<script lang="ts">
    export let id: string;
    export const inputs = {
        MIDI: {
            call: (status, data1, data2) => {
                setTimeout(() => {
                    emit("MIDI", status, data1, data2);
                }, millis);
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

    let millis = 1000;

    function emit(output, ...data) {
        for (const receiver of outputs[output]) {
            receiver.call(...data);
        }
        highlightOutput(id, output);
    }
</script>

<NodeUI width="150">
    <Title>Delay (ms)</Title>
    <NumericInput bind:value={millis} />
</NodeUI>
