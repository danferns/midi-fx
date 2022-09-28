<script lang="ts" context="module">
    import { channelColors } from "src/ts/util/ColorUtil";

    const channels = Array(16)
        .fill(0)
        .map((_, i) => {
            return {
                name: `${i + 1}`,
                color: channelColors[i],
            };
        });

    function isChannelSpecificMessage(status: number) {
        return status >= 0x80 && status <= 0xef;
    }

    function getChannel(status: number) {
        return status & 0xf;
    }
</script>

<script lang="ts">
    import { createEmitter } from "src/ts/util/NodeUtil";
    import Matrix from "../widgets/matrix/Matrix.svelte";
    import NodeUi from "../widgets/NodeUI.svelte";
    export let id: string;
    export const inputs: NodeInputs = {
        MIDI: (status, data1, data2) => {
            if (isChannelSpecificMessage(status)) {
                const channelFrom = getChannel(status);
                for (let channelTo = 0; channelTo < 16; channelTo++) {
                    if (state.matrix[channelFrom][channelTo] !== 0) {
                        emit("MIDI", status - channelFrom + channelTo, data1, data2);
                    }
                }
            } else {
                emit("MIDI", status, data1, data2);
            }
        },
    };
    export const outputs: NodeOutputs = {
        MIDI: new Set(),
    };
    export let state = {
        matrix: Array(16) // identity matrix
            .fill(Array(16).fill(0))
            .map((row, i) => row.map((_, j) => (i === j ? 1 : 0))),
    };
    const emit = createEmitter(id, outputs);

    const xArray = channels;
    const yArray = channels;
</script>

<NodeUi>
    <Matrix {xArray} {yArray} bind:state={state.matrix} />
</NodeUi>
