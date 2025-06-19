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

<svg height={size} width={size} on:pointerdown|stopPropagation={pointerDown} class="mousedrag">
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
