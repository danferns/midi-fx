<script lang="ts" context="module">
    export function isNoteOn(status: number, data1: number, data2: number) {
        if (status >= 144 && status < 160 && data2 !== 0) return true;
        else return false;
    }

    export function isNoteOff(status: number, data1: number, data2: number) {
        if (status >= 128 && status < 144) return true;
        else if (status >= 144 && status <= 159 && data2 === 0) return true;
        else return false;
    }
</script>

<script lang="ts">
    import { createEmitter } from "src/ts/util/NodeUtil";
    import NodeUi from "../widgets/NodeUI.svelte";
    import Title from "../widgets/Title.svelte";
    export let id: string;
    export const inputs: NodeInputs = {
        MIDI: (status, data1, data2) => {
            if (isNoteOn(status, data1, data2)) {
                emit("Note On", status, data1, data2);
            } else if (isNoteOff(status, data1, data2)) {
                emit("Note Off", status, data1, data2);
            }
        },
    };
    export const outputs: NodeOutputs = {
        "Note On": new Set(),
        "Note Off": new Set(),
    };
    const emit = createEmitter(id, outputs);
</script>

<NodeUi><Title>Splitter</Title></NodeUi>
