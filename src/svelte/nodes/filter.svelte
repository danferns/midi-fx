<script lang="ts" context="module">
    export const messageTypes = {
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
</script>

<script lang="ts">
    export let id: string;
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

    import NodeUI from "../widgets/NodeUI.svelte";
    import LabelledCheckBox from "../widgets/LabelledCheckBox.svelte";

    import { highlightOutput } from "../../ts/util/NodeUtil";

    function emit(output, ...data) {
        for (const receiver of outputs[output]) {
            receiver.call(...data);
        }
        highlightOutput(id, output);
    }

    let passThrough = [];
</script>

<NodeUI>
    {#each Object.keys(messageTypes) as messageType}
        <LabelledCheckBox bind:group={passThrough} name={messageType} />
    {/each}
</NodeUI>
