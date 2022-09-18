<script lang="ts">
    export let padding: number = 16;
</script>

<button on:click class="mousedrag" style:padding={padding}px ><slot /></button>

<style>
    button {
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
