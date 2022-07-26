<script lang="ts">
    import { onMount, tick } from "svelte";

    import {
        createConnection,
        destroyConnection,
        destroyNode,
        Instances,
        instances,
    } from "src/ts/editor/instances";
    import PseudoPath, { pseudoConnection } from "./PseudoPath.svelte";

    import { translateX, translateY, scale } from "./NodeEditor.svelte";

    import ContextMenu from "./ContextMenu.svelte";
    import { showInfo } from "./InfoModal.svelte";

    export let id;

    export let x = 0;
    export let y = 0;

    export let gui;

    let nodeInputs = {};
    let nodeOutputs = {};

    let guiOutputs: {
        [key: string]: GUIOutput;
    } = {};

    let guiInputs: {
        [key: string]: GUIInput;
    } = {};

    $: {
        for (const [name, node] of Object.entries(nodeInputs)) {
            (guiInputs[name] ??= {
                x: 0,
                y: 0,
            } as GUIInput).node = node as NodeInput;
        }
        for (const [name, node] of Object.entries(nodeOutputs)) {
            (guiOutputs[name] ??= {
                x: 0,
                y: 0,
                connections: new Set(),
                active: false,
            } as GUIOutput).node = node as NodeOutput;
        }
    }

    let inputElements: {
        [key: string]: HTMLElement;
    } = {};

    let outputElements: {
        [key: string]: HTMLElement;
    } = {};

    $instances[id].inputs = guiInputs;
    $instances[id].outputs = guiOutputs;

    function handlePointerdown(e: PointerEvent) {
        if (e.pointerType === "mouse" && !(e.buttons === 1)) return;
        for (const elm of e.composedPath()) {
            if (
                (elm as HTMLElement).classList &&
                (elm as HTMLElement).classList.contains("mousedrag")
            )
                return;
        }
        window.addEventListener("pointermove", handlePointermove);
        window.addEventListener("pointerup", handlePointerup);
        window.addEventListener("blur", handlePointerup);
    }

    function handlePointermove(e: PointerEvent) {
        e.preventDefault();
        x += e.movementX / $scale;
        y += e.movementY / $scale;
        updateCoords();
    }

    function updateCoords() {
        instances.update((insts) => {
            insts[id].x = x;
            insts[id].y = y;
            for (const [name, input] of Object.entries(inputElements)) {
                const box = input.getBoundingClientRect();
                const inputY = (box.top + box.bottom) / 2;
                const inputX = (box.left + box.right) / 2;
                insts[id].inputs[name].x = (inputX - $translateX) / $scale;
                insts[id].inputs[name].y = (inputY - $translateY) / $scale;
            }
            for (const [name, output] of Object.entries(outputElements)) {
                const box = output.getBoundingClientRect();
                const outputY = (box.top + box.bottom) / 2;
                const outputX = (box.left + box.right) / 2;
                insts[id].outputs[name].x = (outputX - $translateX) / $scale;
                insts[id].outputs[name].y = (outputY - $translateY) / $scale;
            }
            return insts;
        });
    }

    function handlePointerup() {
        window.removeEventListener("pointermove", handlePointermove);
        window.removeEventListener("pointerup", handlePointerup);
        window.removeEventListener("blur", handlePointerup);
    }

    onMount(async () => {
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
                    instances.update((val: Instances) => {
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
    let contextMenuX: number;
    let contextMenuY: number;

    function onContextMenu(e: MouseEvent) {
        contextMenuX = e.clientX / $scale - $translateX / $scale;
        contextMenuY = e.clientY / $scale - $translateY / $scale;
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
        x={contextMenuX}
        y={contextMenuY}
        on:close={() => {
            showContextMenu = false;
        }}
    />
{/if}

<PseudoPath />

<svelte:window on:resize={updateCoords} />

<div
    class="node"
    on:pointerdown|stopPropagation={handlePointerdown}
    on:contextmenu|preventDefault={onContextMenu}
    style="--x: {x}px; --y: {y}px;"
>
    {#each Object.entries(guiInputs) as [name]}
        <div class="input">
            <span>{name}</span>
            <div
                class={name}
                bind:this={inputElements[name]}
                on:pointerup={(e) => {
                    onInputPointerup(e, name);
                }}
                on:pointerdown|stopPropagation={(e) => onInputPointerdown(e, name)}
            />
        </div>
    {/each}
    <svelte:component
        this={gui}
        on:resize={async () => {
            await tick();
            updateCoords();
        }}
        {id}
        bind:inputs={nodeInputs}
        bind:outputs={nodeOutputs}
    />
    {#each Object.entries(guiOutputs) as [name]}
        <div class="output">
            <span>{name}</span>
            <div
                class={name}
                bind:this={outputElements[name]}
                on:pointerdown={(e) => {
                    onOutputPointerdown(e, name);
                }}
            />
        </div>
    {/each}
</div>

<style>
    div.node {
        position: absolute;
        top: calc(50% + var(--y, 0));
        left: calc(50% + var(--x, 0));
        transform: translate(-50%, -50%);
        min-width: fit-content;
        background: hsl(0 0% 0% / 75%);
        border-radius: 16px;
        outline: hsl(0 0% 20%) solid 2px;
        user-select: none;
        z-index: 2;
    }

    /* text */

    :is(div.output, div.input) {
        padding: 8px;
        margin: 8px;
    }

    div.output > span {
        position: fixed;
        right: 16px;
    }

    div.input > span {
        position: fixed;
        left: 16px;
    }

    /* socket */

    :is(div.output, div.input) > div {
        height: 14px;
        width: 14px;
        border-radius: 50%;
        background: white;
        border: 2px solid black;
    }

    div.input > div {
        position: relative;
        left: calc(0% - 26px);
    }

    div.output > div {
        position: relative;
        left: calc(100% + 8px);
    }

    /* hover effect */

    :is(div.input, div.output) > div:hover {
        border: 2px solid hsl(0 0% 100%);
    }

    /* special colors */

    :is(div.output, div.input) > div.MIDI {
        background: hsl(160 90% 60%);
    }
</style>
