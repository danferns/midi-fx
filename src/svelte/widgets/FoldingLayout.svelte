<script lang="ts">
    import { createEventDispatcher } from "svelte";
    export let folded: boolean = false;

    const dispatch = createEventDispatcher();

    $: {
        folded;
        dispatch("resize");
    }
</script>

<div class:folded>
    <slot />
</div>

<style>
    .folded {
        display: none;
    }
</style>
