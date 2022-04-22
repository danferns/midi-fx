<script lang="ts">
    import { createEmitter } from "../../ts/util/NodeUtil";
    import Knob from "../widgets/Knob.svelte";
    import NodeUi from "../widgets/NodeUI.svelte";
    import Title from "../widgets/Title.svelte";
    import { messageTypes } from "./filter.svelte";
    export let id: string;
    export const inputs: NodeInputs = {
        MIDI: (status, data1, data2) => {
            if (messageTypes["Note On / Off"](status)) {
                emit("MIDI", status, data1, Math.round((data2 * level) / 100));
            } else {
                emit("MIDI", status, data1, data2);
            }
        },
    };
    export const outputs: NodeOutputs = {
        MIDI: new Set(),
    };
    const emit = createEmitter(id, outputs);

    let level = 100;
</script>

<NodeUi>
    <Title>Scale</Title>
    <div><Knob bind:percent={level} size={120} onReset={() => 100} /></div>
</NodeUi>

<style>
    div {
        padding: 0px 16px 8px 16px;
    }
</style>
