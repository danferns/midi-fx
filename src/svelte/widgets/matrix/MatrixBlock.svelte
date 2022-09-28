<script lang="ts">
    export let state = 0;
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
    class:active={state}
    on:click|stopPropagation={() => {
        state = 1 - state;
    }}
    on:mouseover
    on:mouseleave
/>

<style>
    div {
        height: 20px;
        width: 20px;
        margin: 1px;
        background: hsl(0 0% 20%);
        border-radius: 10%;
        transition: border-radius 0.2s, background 0.15s ease-out;
    }

    div:hover:not(.active) {
        border-radius: 25%;
        background: hsl(0 0% 50%);
    }

    .active {
        border-radius: 50%;
        background: hsl(0 0% 80%);
    }
</style>
