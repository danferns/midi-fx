<script lang="ts">
    import { createEmitter } from "src/ts/util/NodeUtil";
    import NodeUi from "../widgets/NodeUI.svelte";
    import NumericInput from "../widgets/NumericInput.svelte";
    import Title from "../widgets/Title.svelte";
    import { isNoteOn } from "./note-splitter.svelte";
    export let id: string;
    export const inputs: NodeInputs = {
        MIDI: (status, data1, data2) => {
            if (isNoteOn(status, data1, data2)) {
                targetValue = data2;
            }
        },
    };
    export const outputs: NodeOutputs = {
        MIDI: new Set(),
    };
    export let state = {
        cc: 0,
    };
    const emit = createEmitter(id, outputs);

    let weight = 0.2; // affects how slowly the value changes

    let targetValue = 0,
        value = 0;

    function sendMessage() {
        if (Math.round(value) !== targetValue) {
            value += (targetValue - value) / (weight * 50);
            emit("MIDI", 0xb0, state.cc, value);
        }
        setTimeout(sendMessage, 1000 / 50);
    }

    sendMessage();
</script>

<NodeUi>
    <Title>Velocity to CC</Title>
    <NumericInput bind:value={state.cc} />
</NodeUi>
