<script lang="ts" context="module">
    let activeOutput: Output;
    var runningStatus;

    export const outputs = {};
    export const inputs = {
        MIDI: {
            call: (status, data1, data2) => {
                const message = [status? status: runningStatus];
                if (typeof data1 === "number") message.push(data1);
                if (typeof data1 === "number" && typeof data2 === "number") message.push(data2);
                activeOutput.send(message);
                runningStatus = status? status: runningStatus;
            },
        },
    };
</script>

<script lang="ts">
    import { storage } from "../../ts/storage";
    import { onMount, tick, createEventDispatcher } from "svelte";
    import { Output, WebMidi } from "webmidi";

    export let id;

    const dispatch = createEventDispatcher();

    let outputNames: Array<string> = [];
    let activeOutputName: string;

    onMount(async () => {
        await WebMidi.enable();
        WebMidi.addListener("portschanged", updateOutputs);
        updateOutputs();
    });

    async function updateOutputs() {
        const newOutputNames = [];
        const outputs = WebMidi.outputs;
        for (const output of outputs) {
            newOutputNames.push(output.name);
        }
        outputNames = newOutputNames;
        const lastOutput = await outputStore.getValue();
        if (outputNames.includes(lastOutput)) {
            changeOutput(lastOutput);
        }
        await tick();
        dispatch("resize", {});
    }

    const outputStore = new storage.local("output");

    function onOutputChange(e: Event) {
        const selection = e.target as HTMLSelectElement;
        blurTarget(selection);
        changeOutput(selection.value);
        outputStore.setValue(selection.value);
    }

    function changeOutput(name: string) {
        activeOutputName = name;
        activeOutput = WebMidi.getOutputByName(name);
    }

    function blurTarget(target: HTMLSelectElement) {
        target.blur();
    }
</script>

<main>
    <div>
        <span>Output Device</span>
        <select on:change={onOutputChange} bind:value={activeOutputName}>
            {#each outputNames as output}
                <option>{output}</option>
            {/each}
        </select>
    </div>
</main>

<style>
    main {
        user-select: none;
    }
    div {
        display: block;
        margin: 8px;
        background: hsl(0 0% 10%);
        border-radius: 12px;
    }
    span {
        display: block;
        text-align: center;
    }

    select,
    span {
        padding: 16px;
        font-family: inherit;
        color: inherit;
        font-size: small;
        letter-spacing: inherit;
    }

    select {
        border-radius: 8px;
        background: hsl(0 0% 20%);
        border-width: 0px;
        width: 100%;
    }

    select:focus {
        outline: none;
        background: hsl(0 0% 30%);
    }

    option {
        padding: 8px;
    }
</style>
