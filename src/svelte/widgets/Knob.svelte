<script>
    import { boundValue } from "src/ts/util/MathUtil";
    export let size = 24; // pixels
    export let percent = 50;
    export let onReset = (p) => {
        return p;
    };
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
    on:pointermove={(e) => {
        if (e.buttons === 1) {
            percent = boundValue(percent - (50 * e.movementY) / radius, 0, 100);
        }
    }}
    on:contextmenu|preventDefault={() => {
        percent = onReset(percent);
    }}
    height={radius * 2.4}
    width={radius * 2.4}
    class="mousedrag"
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
