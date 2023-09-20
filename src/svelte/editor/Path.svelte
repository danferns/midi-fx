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
<script>
    import { beforeUpdate } from "svelte";

    export let x1 = 0;
    export let y1 = 100;
    export let x2 = 100;
    export let y2 = 0;
    export let active = false;

    let brightness = 0.7;

    let isAnimating = false;

    beforeUpdate(() => {
        if (active === true) {
            brightness = 1;
            if (!isAnimating) {
                isAnimating = true;
                fadeOut();
            }
        }
    });

    function fadeOut() {
        if (brightness > 0.7) {
            brightness = Math.max(brightness - 0.015, 0.7);
            requestAnimationFrame(fadeOut);
        } else {
            isAnimating = false;
        }
    }
</script>

<svg>
    <path
        stroke="hsl(0 0% {brightness * 100}%)"
        stroke-width="4px"
        stroke-linecap="round"
        fill="transparent"
        d="M {x1} {y1} C {x1 + Math.abs(x1 - x2) / 4} {y1}, {(x1 + x2) / 2} {(y1 + y2) / 2}, {(x1 +
            x2) /
            2} {(y1 + y2) / 2} S {x2 - Math.abs(x1 - x2) / 4} {y2} {x2} {y2}"
    />
</svg>

<style>
    svg {
        height: 100%;
        width: 100%;

        position: absolute;
        top: 50%;
        left: 50%;
        pointer-events: stroke;
        overflow: visible;
        transform: translate(-50%, -50%);
    }
</style>
