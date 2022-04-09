<script lang="ts">
    import { init, setInput, setOutput } from "../ts/midi-io";
    import { storage } from "../ts/storage";
    import { onMount } from "svelte";

    const ports = { inputs: [], outputs: [] };
    let activeInput, activeOutput;

    onMount(async () => {
        const { inputs, outputs } = await init();
        activeInput = await inputStore.getValue();
        activeOutput = await outputStore.getValue();
        ports.inputs = inputs;
        ports.outputs = outputs;
        setInput(activeInput);
        setOutput(activeOutput);
    });

    const inputStore = new storage.local("input");
    const outputStore = new storage.local("output");

    function onInputChange(e: Event) {
        const selection = e.target as HTMLSelectElement;
        blurTarget(selection);
        setInput(selection.value);
        inputStore.setValue(selection.value);
    }

    function onOutputChange(e: Event) {
        const selection = e.target as HTMLSelectElement;
        blurTarget(selection);
        setOutput(selection.value);
        outputStore.setValue(selection.value);
    }

    function blurTarget(target: HTMLSelectElement) {
        target.blur();
    }
</script>

<main>
    <div>
        <span>Input Device</span>
        <select on:change={onInputChange} bind:value={activeInput}>
            {#each ports.inputs as input}
                <option>{input.name}</option>
            {/each}
        </select>
    </div>
    <div>
        <span>Output Device</span>
        <select on:change={onOutputChange} bind:value={activeOutput}>
            {#each ports.outputs as output}
                <option>{output.name}</option>
            {/each}
        </select>
    </div>
</main>

<style>
    main {
        user-select: none;
    }
    div {
        display: inline-block;
        padding: 12px;
        margin: 8px;
        background: hsl(0 0% 10%);
        border-radius: 12px;
    }
    span {
        display: inline-block;
        width: 150px;
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
    }

    select:focus {
        outline: none;
        background: hsl(0 0% 30%);
    }

    option {
        padding: 8px;
    }
</style>
