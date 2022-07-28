<script lang="ts">
    import { createEmitter } from "src/ts/util/NodeUtil";
    import Knob from "../widgets/Knob.svelte";
    import NodeUi from "../widgets/NodeUI.svelte";
    import Title from "../widgets/Title.svelte";
    import { messageTypes } from "./filter.svelte";
    export let id: string;
    export const inputs: NodeInputs = {
        MIDI: (status, data1, data2) => {
            if (messageTypes["Note On / Off"](status)) {
                const scaledLevel = Math.floor(data2 * state.level) / 100;
                emit("MIDI", status, data1, scaledLevel);
            } else {
                emit("MIDI", status, data1, data2);
            }
        },
    };
    export const outputs: NodeOutputs = {
        MIDI: new Set(),
    };
    export let state = {
        level: 100,
    };
    const emit = createEmitter(id, outputs);
</script>

<NodeUi>
    <Title>Scale</Title>
    <div><Knob bind:percent={state.level} size={120} onReset={() => 100} /></div>
</NodeUi>

<style>
    div {
        padding: 0px 16px 8px 16px;
    }
</style>
