<script lang="ts" context="module">
import { highlightOutput } from "../../ts/util/NodeUtil";

    export const inputs = {
        MIDI: {
            call: (status, data1, data2) => {
                for (const messageType of passThrough) {
                    if (messageTypes[messageType](status)) {
                        emit("MIDI", status, data1, data2);
                        return;
                    }
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

    const messageTypes = {
        "Note On / Off": (status) => {
            if (status >= 128 && status <= 159) return true;
            else return false;
        },
        "Polyphonic Aftertouch": (status) => {
            if (status >= 160 && status <= 175) return true;
            else return false;
        },
        "Control / Mode Change": (status) => {
            if (status >= 176 && status <= 191) return true;
            else return false;
        },
        "Program Change": (status) => {
            if (status >= 192 && status <= 207) return true;
            else return false;
        },
        "Channel Aftertouch": (status) => {
            if (status >= 208 && status <= 223) return true;
            else return false;
        },
        "Pitch Bend Change": (status) => {
            if (status >= 224 && status <= 239) return true;
            else return false;
        },
        Transport: (status) => {
            // Song Position Pointer, Song Select, Start, Continue, Stop
            if ([242, 243, 250, 251, 252].includes(status)) return true;
            else return false;
        },
    };

    let passThrough = [];
</script>

<script lang="ts">
    import { onMount } from "svelte";

    export let id: string;

    onMount(() => {
        nodeId = id;
    });
</script>

<main>
    {#each Object.keys(messageTypes) as messageType}
        <div>
            <input
                type="checkbox"
                bind:group={passThrough}
                name={messageType}
                value={messageType}
            />
            <span>&nbsp;{messageType}</span>
        </div>
    {/each}
</main>

<style>
    main {
        padding: 8px;
        margin: 8px;
        background: var(--background);
        border-radius: 8px;
        font-size: small;
    }

    div {
        padding: 8px;
    }

    input[type="checkbox"] {
        appearance: none;
        margin: 0;

        background: var(--background);
        box-shadow: inset var(--background-accent) 0px 0px 0px 2px;
        height: 1.15em;
        width: 1.15em;
        vertical-align: middle;
    }

    input[type="checkbox"]:checked {
        background: var(--background-accent-focused);
        box-shadow: none;
    }

    span {
        vertical-align: middle;
    }
</style>
