<script lang="ts">
    export let alignItems: "flex-start" | "flex-end" | "center" | "stretch" | "baseline" = "center";
</script>

<div style:align-items={alignItems}><slot /></div>

<style>
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    div > :global(*) {
        flex: 1;
        margin: 0 2px;
    }

    div > :global(*:first-child) {
        margin-left: 0;
    }

    div > :global(*:last-child) {
        margin-right: 0;
    }
</style>
