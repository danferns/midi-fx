<script lang="ts">
    export let width = undefined;
</script>

<main style="--width: {width}px"><slot /></main>

<style>
    main {
        margin: 8px;
        background: var(--background);
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        width: var(--width, auto);
    }
</style>
