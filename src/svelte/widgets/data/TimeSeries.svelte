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
    import { onMount } from "svelte";
    export let height: number;
    export let width: number;
    export let lastValue: number;
    import { WebglPlot, WebglLine } from "webgl-plot";
    import { colord } from "colord";

    const lineColor = colord("hsl(180, 50%, 50%)").toRgb();
    ["r", "g", "b"].forEach((c) => (lineColor[c] /= 255));

    let canvas: HTMLCanvasElement, plot: WebglPlot, line: WebglLine;

    onMount(() => {
        plot = new WebglPlot(canvas);
        line = new WebglLine(lineColor, canvas.width);
        plot.addLine(line);
        line.arrangeX();
        line.scaleY = 2 / 127;
        line.offsetY = -1;
        updateFrame();
    });

    function updateFrame() {
        update();
        plot.update();
        requestAnimationFrame(updateFrame);
    }

    function update() {
        for (let i = 0; i < line.numPoints - 1; i++) {
            line.setY(i, line.getY(i + 1));
        }
        line.setY(line.numPoints - 1, lastValue);
    }
</script>

<canvas {height} {width} bind:this={canvas} />

<style>
    canvas {
        border-radius: 8px;
    }
</style>
