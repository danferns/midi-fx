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

    import {
        createConnection,
        destroyConnection,
        destroyNode,
        instances,
    } from "src/ts/editor/instances";
    import PseudoPath, { pseudoConnection } from "./PseudoPath.svelte";

    import { scale, displayToEditorCoords } from "src/ts/editor/transform";

    import ContextMenu from "./ContextMenu.svelte";
    import { showInfo } from "./InfoModal.svelte";
    import interact from "interactjs";

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

    function onOutputPointerdown(e: PointerEvent, name: string) {
        if (e.pointerType !== "mouse" || e.buttons === 1) {
            e.stopPropagation();

            pseudoConnection.update((val) => {
                val.from = [id, name];
                return val;
            });
        }
    }

    function onInputPointerup(e: Event, name: string) {
        pseudoConnection.update((val) => {
            if (val.from) {
                createConnection(val.from[0], val.from[1], [id, name]);
                val.from = undefined;
            }
            return val;
        });
    }

    function onInputPointerdown(e: PointerEvent, name: string) {
        if (e.pointerType !== "mouse" || e.buttons === 1) {
            e.stopPropagation();

            function onInputPointerleave(e: PointerEvent) {
                if (e.pointerType !== "mouse" || e.buttons === 1) {
                    e.stopPropagation();
                    let outputNode, outputName;
                    instances.update((val: LiveInstances) => {
                        for (const node of Object.entries(val)) {
                            for (const output of Object.entries(node[1].outputs)) {
                                for (const connection of output[1].connections) {
                                    if (connection[0] === id && connection[1] === name) {
                                        outputNode = node[0];
                                        outputName = output[0];
                                    }
                                }
                            }
                        }
                        return val;
                    });
                    if (outputNode) {
                        destroyConnection(outputNode, outputName, [id, name]);
                        pseudoConnection.update((val) => {
                            val.from = [outputNode, outputName];
                            return val;
                        });
                    }
                }
            }

            e.target.addEventListener("pointerleave", onInputPointerleave);

            window.addEventListener("pointerup", () => {
                e.target.removeEventListener("pointerleave", onInputPointerleave);
            });
        }
    }

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
        {#each Object.entries(liveInputs) as [name]}
            <div class="input">
                <div
                    class={name}
                    bind:this={inputElements[name]}
                    on:pointerup={(e) => {
                        onInputPointerup(e, name);
                    }}
                    on:pointerdown|stopPropagation={(e) => onInputPointerdown(e, name)}
                >
                    <span>{name}</span>
                </div>
            </div>
        {/each}
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
        {#each Object.entries(liveOutputs) as [name]}
            <div class="output">
                <div
                    class={name}
                    bind:this={outputElements[name]}
                    on:pointerdown={(e) => {
                        onOutputPointerdown(e, name);
                    }}
                >
                    <span>{name}</span>
                </div>
            </div>
        {/each}
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

    /* text */

    :is(div.output, div.input) {
        writing-mode: vertical-lr;
        color: black;
        font-size: 12px;
        margin: 4px 0px;
        padding: 0px;
        width: 24px;
    }

    /* socket */

    :is(div.output, div.input) > div {
        padding: 6px 4px;
        background: white;
    }

    div.input > div {
        border-radius: 6px 0 0 6px;
    }

    div.output > div {
        border-radius: 0 6px 6px 0;
    }

    /* hover effect */

    :is(div.input, div.output) > div:hover {
        background: hsl(0 0% 10%) !important;
        color: white;
    }

    /* special colors */

    :is(div.output, div.input) > div.MIDI {
        background: hsl(160 90% 60%);
    }
</style>
