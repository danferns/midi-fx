<!--

    Copyright (C) 2022 Daniel Fernandes

    This file is part of MIDI-FX.

    MIDI-FX is free software: you can redistribute it and/or modify it
    under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    MIDI-FX is distributed in the hope that it will be useful, but
    WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
    General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with MIDI-FX. If not, see <https://www.gnu.org/licenses/>.

-->
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
            on:click={() => {
                onClick();
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
