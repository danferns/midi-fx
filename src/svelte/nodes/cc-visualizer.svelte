<script lang="ts">
    import NodeUi from "../widgets/NodeUI.svelte";
    import { createEmitter } from "src/ts/util/NodeUtil";
    import Title from "../widgets/Title.svelte";
    import NumericInput from "../widgets/NumericInput.svelte";
    import TimeSeries from "../widgets/TimeSeries.svelte";
    export let id: string;
    export const inputs: NodeInputs = {
        MIDI: (status, data1, data2) => {
            if (status >= 0xb0 && status <= 0xbf) {
                if (state.cc == -1) {
                    state.cc = data1;
                }
                if (data1 == state.cc) {
                    lastValue = data2;
                }
            }
        },
    };
    export const outputs: NodeOutputs = {};
    export let state = {
        cc: -1,
    };
    const emit = createEmitter(id, outputs);
    let lastValue = 0;
</script>

<NodeUi>
    <Title>CC Visualizer</Title>
    <NumericInput bind:value={state.cc} />
    <TimeSeries height={200} width={400} bind:lastValue />
</NodeUi>
