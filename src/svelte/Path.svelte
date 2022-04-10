<script>
    import { beforeUpdate } from "svelte";

    export let x1 = 0;
    export let y1 = 100;
    export let x2 = 100;
    export let y2 = 0;
    export let active = false;

    let brightness = 0.7;

    beforeUpdate(() => {
        if (active === true) {
            brightness = 1;
        }
    });

    function fadeOut() {
        brightness = Math.max(brightness - 0.015, 0.7);
        requestAnimationFrame(fadeOut);
    }

    requestAnimationFrame(fadeOut);
</script>

<svg>
    <path
        stroke="hsl(0 0% {brightness * 100}%)"
        stroke-width="4px"
        fill="transparent"
        d="M {x1} {y1} C {x1 + Math.abs(x1 - x2) / 4} {y1}, {(x1 + x2) / 2} {(y1 + y2) / 2}, {(x1 +
            x2) /
            2} {(y1 + y2) / 2} S {x2 - Math.abs(x1 - x2) / 4} {y2} {x2} {y2}"
        on:contextmenu={(e) => {
            console.log(e);
        }}
    />
</svg>

<style>
    svg {
        height: 100%;
        width: 100%;

        position: absolute;
        pointer-events: stroke;
    }
</style>
