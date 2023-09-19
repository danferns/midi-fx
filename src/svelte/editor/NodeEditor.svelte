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
    import Node, { isClassinEventPath } from "./NodeWrapper.svelte";
    import Path from "./Path.svelte";
    import { instances } from "src/ts/editor/instances";
    import { translateX, translateY, scale, scaleAtPoint } from "src/ts/editor/transform";
    import Menu from "./menu/Menu.svelte";
    import InfoModal from "./InfoModal.svelte";
    import { onMount } from "svelte";
    import {
        isSavedStateAvailable,
        loadBuiltInPreset,
        loadEditorState,
        saveEditorState,
    } from "src/ts/editor/save";

    import interact from "interactjs";

    onMount(async () => {
        interact(editor)
            .styleCursor(false)
            .draggable({
                ignoreFrom: ".mousedrag",
                listeners: {
                    move: (e) => {
                        $translateX += e.dx;
                        $translateY += e.dy;
                    },
                },
            })
            .gesturable({
                onmove: (e) => {
                    const newScale = $scale + e.ds;
                    scaleAtPoint(newScale, { x: e.clientX, y: e.clientY });
                },
            });

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

    let localInstances: LiveInstances = {};

    instances.subscribe((val: LiveInstances) => {
        localInstances = val;
    });

    let editor: HTMLElement;

    function onEditorScroll(e: WheelEvent) {
        if (isClassinEventPath(e, "scroll")) return;
        const newScale = $scale * (1 - Math.sign(e.deltaY) * 0.1);
        scaleAtPoint(newScale, { x: e.clientX, y: e.clientY });
    }
</script>

<Menu />
<div bind:this={editor} on:wheel={onEditorScroll} style:touch-action="none">
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
