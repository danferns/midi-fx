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
    import { boundValue } from "src/ts/util/MathUtil";
    import interact from "interactjs";
    import { onMount } from "svelte";

    export let size = 24; // pixels
    export let percent = 50;
    export let onReset = (p) => {
        return p;
    };

    let knob;

    onMount(() => {
        interact(knob)
            .styleCursor(false)
            .draggable({
                listeners: {
                    move: (e) => {
                        percent = boundValue(percent - (25 * e.dy) / radius, 0, 100);
                    },
                },
            });
    });

    let radius = size / 2.4;

    let x,
        y,
        meterRadius = radius * 1.1,
        startAngle = 210,
        endAngle;
    $: endAngle = startAngle + ((360 - startAngle) * 2 * percent) / 100;
    x = radius * 1.2;
    y = radius * 1.2;

    let start, end, drawLargerArc;
    $: start = polarToCartesian(x, y, meterRadius, endAngle);
    $: end = polarToCartesian(x, y, meterRadius, startAngle);
    $: drawLargerArc = endAngle - startAngle > 180 ? "1" : "0";

    let notchStart, notchEnd;
    $: notchStart = polarToCartesian(x, y, meterRadius * 0.65, endAngle);
    $: notchEnd = polarToCartesian(x, y, meterRadius * 0.825, endAngle);

    function polarToCartesian(centerX, centerY, radius, degrees) {
        const radians = ((degrees - 90) * Math.PI) / 180.0;

        return {
            x: centerX + radius * Math.cos(radians),
            y: centerY + radius * Math.sin(radians),
        };
    }
</script>

<svg
    bind:this={knob}
    on:contextmenu|preventDefault={() => {
        percent = onReset(percent);
    }}
    height={radius * 2.4}
    width={radius * 2.4}
>
    <circle r={radius} cx={x} cy={y} />
    <path
        class="arc"
        d="M {start.x} {start.y} A {meterRadius} {meterRadius} 0 {drawLargerArc} 0 {end.x} {end.y}"
        stroke-width={radius / 12}
    />
    <text {x} y={y + radius * 0.15} font-size={radius * 0.5}>{Math.round(percent)}%</text>
    <path
        class="notch"
        d="M {notchStart.x} {notchStart.y} L {notchEnd.x} {notchEnd.y}"
        stroke-width={radius / 18}
    />
</svg>

<style>
    svg {
        touch-action: none;
        user-select: none;
    }

    circle {
        fill: var(--background-accent);
        transition: fill 0.2s;
    }

    circle:active {
        fill: var(--background-accent-focused);
    }

    path.arc {
        fill: none;
        stroke: hsl(180 50% 50%);
        stroke-linecap: round;
        transition: stroke 0.2s;
    }

    circle:active + path.arc {
        stroke: hsl(180 70% 70%);
    }

    text {
        font-family: Arial, sans-serif;
        fill: hsl(0 0% 80%);
        text-anchor: middle;
        pointer-events: none;
        transition: fill 0.2s;
    }

    circle:active + path.arc + text {
        fill: white;
    }

    path.notch {
        stroke: hsl(0 00% 50%);
        stroke-linecap: round;
    }
</style>
