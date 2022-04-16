<script lang="ts">
    export let value: number;
</script>

<input type="number" bind:value />

<style>
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
