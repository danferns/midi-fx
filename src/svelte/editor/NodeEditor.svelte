<script lang="ts">
    import Node from "./Node.svelte";
    import Path from "./Path.svelte";
    import { instances } from "src/ts/editor/instances";
    import { translateX, translateY, scale } from "src/ts/editor/transform";
    import Menu from "./menu/Menu.svelte";
    import InfoModal from "./InfoModal.svelte";
    import { onMount } from "svelte";
    import {
        isSavedStateAvailable,
        loadBuiltInPreset,
        loadEditorState,
        saveEditorState,
    } from "src/ts/editor/save";

    onMount(async () => {
        if (isSavedStateAvailable()) {
            await loadEditorState();
        } else {
            await loadBuiltInPreset("io");
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key === "s") {
            e.preventDefault();
            saveEditorState();
        }
    });

    let localInstances: Instances = {};

    instances.subscribe((val: Instances) => {
        localInstances = val;
    });

    let editor: HTMLElement;

    function onEditorPointerDown(e: PointerEvent) {
        if (!e.composedPath().includes(editor)) return;
        if (e.pointerType !== "mouse" || e.buttons === 1) {
            e.stopPropagation();
            window.addEventListener("pointermove", onEditorPointerDrag);
            window.addEventListener("pointerup", onEditorPointerUp);
            window.addEventListener("blur", onEditorPointerUp);
        }
    }

    function onEditorPointerUp() {
        window.removeEventListener("pointermove", onEditorPointerDrag);
        window.removeEventListener("pointerup", onEditorPointerUp);
        window.removeEventListener("blur", onEditorPointerUp);
    }

    function onEditorPointerDrag(e: PointerEvent) {
        $translateX += e.movementX;
        $translateY += e.movementY;
    }

    function onEditorScroll(e: WheelEvent) {
        const newScale = $scale * (1 - Math.sign(e.deltaY) * 0.1);
        if (newScale > 0.3 && newScale < 3) {
            $translateX = e.clientX - (e.clientX - $translateX) * newScale / $scale;
            $translateY = e.clientY - (e.clientY - $translateY) * newScale / $scale;
            $scale = newScale;
        }
    }
</script>

<svelte:window on:pointerdown={onEditorPointerDown} on:wheel={onEditorScroll} />

<Menu />
<div bind:this={editor}>
    <main style="transform: translate({$translateX}px, {$translateY}px) scale({$scale});">
        {#each Object.entries(localInstances) as [key, instance]}
            <Node
                id={key}
                x={instance.x}
                y={instance.y}
                gui={instance.component}
                bind:state={instance.state}
            />

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
</div>

<InfoModal />

<style>
    main {
        height: 100%;
        width: 100%;
        transform-origin: 0 0 0;
        touch-action: none;
    }

    :global(:root) {
        --background: hsl(0 0% 10%);
        --background-accent: hsl(0 0% 20%);
        --background-accent-focused: hsl(0 0% 30%);
    }

    div {
        height: 100%;
        width: 100%;
    }
</style>
