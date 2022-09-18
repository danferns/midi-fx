<script lang="ts">
    export let size = 32;
    export let radius = size / 5;
    export let onResize: (dx: number, dy: number) => void;

    function pointerDown(e: PointerEvent) {
        if (e.pointerType === "mouse" && !(e.buttons === 1)) return;
        e.stopPropagation();
        e.preventDefault();
        window.addEventListener("pointermove", pointerMove);
        window.addEventListener("pointerup", pointerUp);
        window.addEventListener("blur", pointerUp);
    }

    function pointerMove(e: PointerEvent) {
        e.stopPropagation();
        e.preventDefault();
        onResize(e.movementX, e.movementY);
    }

    function pointerUp(e: PointerEvent) {
        window.removeEventListener("pointermove", pointerMove);
        window.removeEventListener("pointerup", pointerUp);
        window.removeEventListener("blur", pointerUp);
    }
</script>

<svg
    height={size}
    width={size}
    on:pointerdown|stopPropagation={pointerDown}
    class="mousedrag"
>
    <circle r={radius} cx={size - radius} cy={size - radius} />
    <circle r={radius} cx={size - radius} cy={size - 3.5 * radius} />
    <circle r={radius} cx={size - 3.5 * radius} cy={size - radius} />
</svg>

<style>
    svg {
        cursor: nw-resize;
        display: block;
        position: relative;
        bottom: 0px;
    }

    circle {
        fill: var(--background-accent);
    }

    svg:active > circle {
        fill: var(--background-accent-focused);
    }
</style>
