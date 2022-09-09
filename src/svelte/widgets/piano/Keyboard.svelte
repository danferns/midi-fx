<script>
    export let octaves = 2;
    export let middleC = 60;
    export let keysPressed = [];
    export let height = 160;
    export let width = 1400;

    import Key from "./Key.svelte";
    let keys;

    $: keys = [...Array(octaves * 12 + 1).keys()].map(
        (i) => i + (middleC - Math.floor(octaves / 2) * 12)
    );
</script>

<div class="keyboard mousedrag">
    <div style:height="{height - 16}px">
        {#each keys as note}
            <Key
                noteNum={note}
                on:noteon
                on:noteoff
                pressed={keysPressed.includes(note)}
                keyWidth={(width - 16) / (octaves * 12 + 1)}
            />
        {/each}
    </div>
</div>

<style>
    .keyboard {
        display: flex;
        justify-content: center;
        background: var(--background);
        border-radius: 8px;
    }

    .keyboard > div {
        display: flex;
        overflow: auto;
    }
</style>
