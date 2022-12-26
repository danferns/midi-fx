<script>
    export let height = 100;
</script>

<div style="height: {height}px;" class="scroll">
    <slot />
</div>

<style>
    .scroll {
        overflow-y: auto;
    }

    .scroll::-webkit-scrollbar {
        width: 0px;
    }
</style>
