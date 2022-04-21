<script lang="ts">
    import { createEmitter } from "../../ts/util/NodeUtil";
    export let id: string;
    export const inputs: NodeInputs = {};
    export const outputs: NodeOutputs = {};
    const emit = createEmitter(id, outputs);
</script>
