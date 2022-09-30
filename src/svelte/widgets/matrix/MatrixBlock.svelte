<script lang="ts">
    import { beforeUpdate } from "svelte";

    export let state = 0;
    export let highlight = false;

    let brightness = 0.8;
    let isAnimating = false;

    beforeUpdate(() => {
        if (highlight === true) {
            brightness = 1;
            if (!isAnimating) {
                isAnimating = true;
                fadeOut();
            }
        }
    });

    function fadeOut() {
        if (brightness > 0.8) {
            brightness = Math.max(brightness - 0.01, 0);
            requestAnimationFrame(fadeOut);
        } else {
            isAnimating = false;
        }
    }
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
    class:active={state}
    on:click|stopPropagation={() => {
        state = 1 - state;
    }}
    on:mouseover
    on:mouseleave
    style:background={state === 0 ? "hsl(0 0% 20%)" : `hsla(0, 0%, ${brightness * 100}%, 100%)`}
/>

<style>
    div {
        height: 20px;
        width: 20px;
        margin: 1px;
        border-radius: 10%;
        transition: border-radius 0.2s;
    }

    div:hover:not(.active) {
        border-radius: 25%;
        background: hsl(0 0% 50%) !important;
    }

    .active {
        border-radius: 50%;
    }
</style>
