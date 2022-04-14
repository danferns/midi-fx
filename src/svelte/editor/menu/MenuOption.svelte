<script lang="ts">
   export let name: string;
   export let option: (any) => (any);
</script>

<div on:click={option}>&nbsp;&nbsp;{name}&nbsp;&nbsp;&nbsp;&nbsp;</div>

<style>
    div {
        border-radius: 2px;
        padding: 4px;
        box-sizing: border-box;
        height: 26px;
        background: var(--background);
    }

    div:hover {
        background: var(--background-accent);
    }
</style>