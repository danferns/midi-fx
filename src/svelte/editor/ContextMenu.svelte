<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let items: { [key: string]: () => any } = {};
    export let x: number, y: number;

    let self: HTMLElement;

    document.addEventListener("pointerdown", onPointerDown, true);

    function onPointerDown(e: MouseEvent) {
        if (!e.composedPath().includes(self)) {
            document.removeEventListener("pointerdown", onPointerDown, true);
            dispatch("close");
        }
    }
</script>

<div class="context-menu" style="top: {y}px; left: {x}px;" bind:this={self}>
    {#each Object.entries(items) as [item, onClick]}
        <div
            class="item"
            on:pointerup={() => {
                onClick();
                document.removeEventListener("pointerdown", onPointerDown, true);
                dispatch("close");
            }}
        >
            {item}
        </div>
    {/each}
</div>

<style>
    div.context-menu {
        position: absolute;
        z-index: 3;

        background: var(--background-accent);
        border-radius: 4px;
        padding: 4px;
        box-shadow: rgb(0 0 0 / 75%) 0px 0px 4px 0px;
    }

    div.item {
        padding: 12px;
        border-radius: 2px;
        min-width: max-content;
    }

    div.item:hover,
    div.item:active {
        background: var(--background-accent-focused);
    }
</style>
