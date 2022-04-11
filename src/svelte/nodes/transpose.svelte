<script lang="ts" context="module">
    import { highlightOutput } from "../../ts/util/NodeUtil";
    import { messageTypes } from "./filter.svelte";

    let transpose = 0;

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
    let nodeId: string;
    function emit(output, ...data) {
        for (const receiver of outputs[output]) {
            receiver.call(...data);
        }
        highlightOutput(nodeId, output);
    }
</script>

<script lang="ts">
    export let id;

    nodeId = id;
</script>

<main>
    <span>Transpose</span>
    <input type="number" bind:value={transpose} />
</main>

<style>
    main {
        margin: 8px;
        background: var(--background);
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        width: 150px;
    }
    span {
        text-align: center;
        padding: 16px;
    }
    input {
        font: inherit;
        color: inherit;
        background: var(--background-accent);
        padding: 16px;
        border: unset;
        border-radius: 8px;
    }

    input:focus {
        background: var(--background-accent-focused);
        outline: none;
    }
</style>
