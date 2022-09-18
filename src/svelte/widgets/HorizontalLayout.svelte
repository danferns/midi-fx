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
</style>
