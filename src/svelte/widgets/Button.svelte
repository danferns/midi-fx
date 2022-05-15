<script lang="ts">
</script>

<button on:click><slot /></button>

<style>
    button {
        padding: 16px;
        font: inherit;
        background: var(--background-accent);
        color: inherit;
        border-radius: 8px;
        border: none;
    }

    button:active {
        background: var(--background-accent-focused);
    }
</style>
