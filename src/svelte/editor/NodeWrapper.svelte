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
<script lang="ts" context="module">
    import { getNodeTitle } from "src/ts/nodes/nodes";

    export function isClassinEventPath(e: Event, className: string) {
        for (const elm of e.composedPath()) {
            if (
                (elm as HTMLElement).classList &&
                (elm as HTMLElement).classList.contains(className)
            )
                return true;
        }
        return false;
    }

    export function getCenterCoords(elm: HTMLElement): Point {
        const box = elm.getBoundingClientRect();
        return {
            x: (box.left + box.right) / 2,
            y: (box.top + box.bottom) / 2,
        };
    }
</script>

<script lang="ts">
    import { onMount, tick } from "svelte";

    import { destroyNode, instances } from "src/ts/editor/instances";
    import PseudoPath from "./PseudoPath.svelte";

    import { displayToEditorCoords, scale } from "src/ts/editor/transform";

    import interact from "interactjs";
    import ContextMenu from "./ContextMenu.svelte";
    import { showInfo } from "./InfoModal.svelte";
    import NodeInputsUI from "./NodeInputs.svelte";
    import NodeOutputsUI from "./NodeOutputs.svelte";

    export let id: string;
    export let type: string;

    export let x = 0;
    export let y = 0;

    export let gui: NodeComponent;
    export let state: { [key: string]: unknown };

    // these will be populated by the node component
    let nodeInputs: NodeInputs = {};
    let nodeOutputs: NodeOutputs = {};

    let liveOutputs: {
        [key: string]: LiveOutput;
    } = {};

    let liveInputs: {
        [key: string]: LiveInput;
    } = {};

    $: {
        for (const [name, node] of Object.entries(nodeInputs)) {
            (liveInputs[name] ??= {
                x: 0,
                y: 0,
            } as LiveInput).node = node as NodeInput;
        }
        for (const [name, node] of Object.entries(nodeOutputs)) {
            (liveOutputs[name] ??= {
                x: 0,
                y: 0,
                connections: new Set(),
                active: false,
            } as LiveOutput).node = node as NodeOutput;
        }
    }

    type IOElements = {
        [key: string]: HTMLElement;
    };

    let inputElements: IOElements = {};
    let outputElements: IOElements = {};

    $instances[id].inputs = liveInputs;
    $instances[id].outputs = liveOutputs;

    function updateIOCoords(elements: IOElements, io: { [key: string]: LiveIO }) {
        for (const [name, elm] of Object.entries(elements)) {
            console.log(name);
            const displayCoords = getCenterCoords(elm);
            const { x, y } = displayToEditorCoords(displayCoords);
            io[name].x = x;
            io[name].y = y;
        }
    }

    function updateCoords() {
        instances.update((insts: LiveInstances) => {
            insts[id].x = x;
            insts[id].y = y;
            updateIOCoords(inputElements, insts[id].inputs);
            updateIOCoords(outputElements, insts[id].outputs);
            return insts;
        });
    }

    let node: HTMLElement;
    onMount(async () => {
        interact(node)
            .styleCursor(false)
            .draggable({
                ignoreFrom: "* .mousedrag",
                listeners: {
                    move: (e) => {
                        console.log(e);
                        e.preventDefault();
                        x += e.dx / $scale;
                        y += e.dy / $scale;
                        updateCoords();
                    },
                },
            });
        await tick();
        updateCoords();
    });

    let showContextMenu: boolean = false;
    let contextMenuCoords: Point;

    function onContextMenu(e: MouseEvent) {
        contextMenuCoords = displayToEditorCoords({
            x: e.clientX,
            y: e.clientY,
        });
        showContextMenu = true;
    }

    const contextMenuItems: {
        [key: string]: () => void;
    } = {
        Info: () => {
            showInfo(id);
        },
        "Delete Node": () => {
            destroyNode(id);
        },
    };
</script>

{#if showContextMenu}
    <ContextMenu
        items={contextMenuItems}
        x={contextMenuCoords.x}
        y={contextMenuCoords.y}
        on:close={() => {
            showContextMenu = false;
        }}
    />
{/if}

<PseudoPath />

<svelte:window on:resize={updateCoords} />

<div
    class="node"
    on:contextmenu|preventDefault={onContextMenu}
    style="--x: {x}px; --y: {y}px;"
    bind:this={node}
>
    <div class="inputs">
        <NodeInputsUI {id} inputs={Object.keys(liveInputs)} bind:handles={inputElements} />
    </div>

    <div class="body">
        <h1>{getNodeTitle(type)}</h1>

        <svelte:component
            this={gui}
            on:resize={async () => {
                await tick();
                updateCoords();
            }}
            {id}
            bind:state
            bind:inputs={nodeInputs}
            bind:outputs={nodeOutputs}
        />
    </div>

    <div class="outputs">
        <NodeOutputsUI {id} inputs={Object.keys(liveOutputs)} bind:handles={outputElements} />
    </div>
</div>

<style>
    div.node {
        position: absolute;
        top: calc(50% + var(--y, 0));
        left: calc(50% + var(--x, 0));
        transform: translate(-50%, -50%);
        z-index: 2;
        user-select: none;

        display: flex;
    }

    div.body {
        min-width: max-content;
        background: hsl(0 0% 6%);
        border-radius: 16px;
        border: 1px solid hsl(0 0% 12%);
    }

    :is(div.inputs, div.outputs) {
        width: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    /* title */

    h1 {
        font-size: 16px;
        height: fit-content;
        font-weight: 400;
        text-align: center;
        padding: 4px 12px;
    }
</style>
