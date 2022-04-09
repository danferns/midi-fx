<script lang="ts">
    import { init } from "../../ts/midi-io";
    import { storage } from "../../ts/storage";
    import { onMount } from "svelte";

    const ports = { outputs: [] };
    let activeOutput;

    onMount(async () => {
        const { outputs } = await init();
        activeOutput = await outputStore.getValue();
        ports.outputs = outputs;
    });

    const outputStore = new storage.local("output");

    function onOutputChange(e: Event) {
        const selection = e.target as HTMLSelectElement;
        blurTarget(selection);
        outputStore.setValue(selection.value);
    }

    function blurTarget(target: HTMLSelectElement) {
        target.blur();
    }
</script>

<script lang="ts" context="module">
    export const outputs = {};
    export const inputs = {
        "MIDI": {
            call: (status, data1, data2) => {}
        }
    }
</script>

<main>
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
