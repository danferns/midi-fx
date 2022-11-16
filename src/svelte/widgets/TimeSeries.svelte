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
