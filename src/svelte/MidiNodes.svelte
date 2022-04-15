<script lang="ts" context="module">
    import { writable } from "svelte/store";

    export const translateX = writable(0);
    export const translateY = writable(0);
</script>

<script lang="ts">
    import Node from "./node.svelte";
    import Path from "./Path.svelte";
    import { Instances, instances } from "../ts/editor/instances";
    import Menu from "./editor/menu/Menu.svelte";

    let localInstances: Instances = {};

    instances.subscribe((val: Instances) => {
        localInstances = val;
    });

    function onEditorMouseDown(e: MouseEvent) {
        if (e.buttons === 1) {
            e.stopPropagation();
            window.addEventListener("mousemove", onEditorMouseDrag);
            window.addEventListener("mouseup", onEditorMouseUp);
            window.addEventListener("blur", onEditorMouseUp);
        }
    }

    function onEditorMouseUp() {
        window.removeEventListener("mousemove", onEditorMouseDrag);
        window.removeEventListener("mouseup", onEditorMouseUp);
        window.removeEventListener("blur", onEditorMouseUp);
    }

    function onEditorMouseDrag(e: MouseEvent) {
        $translateX += e.movementX;
        $translateY += e.movementY;
    }
</script>

<svelte:window on:mousedown={onEditorMouseDown} />

<Menu />
<main style="transform: translate({$translateX}px, {$translateY}px);">
    {#each Object.entries(localInstances) as [key, instance]}
        <Node id={key} x={instance.x} y={instance.y} gui={instance.component} />

        {#each Object.entries(instance.outputs) as [outputName, output]}
            {#each [...output.connections.values()] as connection}
                <Path
                    x1={localInstances[key].outputs[outputName].x}
                    y1={localInstances[key].outputs[outputName].y}
                    x2={localInstances[connection[0]].inputs[connection[1]].x}
                    y2={localInstances[connection[0]].inputs[connection[1]].y}
                    active={output.active}
                />
            {/each}
        {/each}
    {/each}
</main>

<style>
    main {
        height: 100%;
        width: 100%;
    }

    :global(:root) {
        --background: hsl(0 0% 10%);
        --background-accent: hsl(0 0% 20%);
        --background-accent-focused: hsl(0 0% 30%);
    }
</style>
