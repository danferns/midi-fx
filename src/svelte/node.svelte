<script lang="ts">
    import { onMount } from "svelte";

    import {
        createConnection,
        destroyConnection,
        Instances,
        instances,
    } from "../ts/editor/instances";
    import PseudoPath, { pseudoConnection } from "./PseudoPath.svelte";

    export let id;

    export let x = 0;
    export let y = 0;

    export let outputs: {
        [key: string]: GUIOutput;
    } = {};

    export let inputs: {
        [key: string]: GUIInput;
    } = {};

    export let gui;

    let guiInputs: {
        [key: string]: HTMLElement;
    } = {};

    let guiOutputs: {
        [key: string]: HTMLElement;
    } = {};

    function handleMousedown() {
        window.addEventListener("mousemove", handleMousemove);
        window.addEventListener("mouseup", handleMouseup);
        window.addEventListener("blur", handleMouseup);
    }

    function handleMousemove(event: MouseEvent) {
        x += event.movementX;
        y += event.movementY;
        updateCoords();
    }

    function updateCoords() {
        instances.update((insts) => {
            insts[id].x = x;
            insts[id].y = y;
            for (const [name, input] of Object.entries(guiInputs)) {
                const box = input.getBoundingClientRect();
                const inputY = (box.top + box.bottom) / 2;
                const inputX = (box.left + box.right) / 2;
                insts[id].inputs[name].x = inputX;
                insts[id].inputs[name].y = inputY;
            }
            for (const [name, output] of Object.entries(guiOutputs)) {
                const box = output.getBoundingClientRect();
                const outputY = (box.top + box.bottom) / 2;
                const outputX = (box.left + box.right) / 2;
                insts[id].outputs[name].x = outputX;
                insts[id].outputs[name].y = outputY;
            }
            return insts;
        });
    }

    function handleMouseup() {
        window.removeEventListener("mousemove", handleMousemove);
        window.removeEventListener("mouseup", handleMouseup);
        window.removeEventListener("blur", handleMouseup);
    }

    onMount(async () => {
        updateCoords();
    });

    function onOutputMousedown(e: MouseEvent, name: string) {
        if (e.buttons === 1) {
            e.stopPropagation();

            pseudoConnection.update((val) => {
                val.from = [id, name];
                return val;
            });
        }
    }

    function onInputMouseup(e: MouseEvent, name: string) {
        pseudoConnection.update((val) => {
            if (val.from) {
                createConnection(val.from[0], val.from[1], [id, name]);
                val.from = undefined;
            }
            return val;
        });
    }

    function onInputMouseleave(e: MouseEvent, name: string) {
        if (e.buttons === 1) {
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
</script>

<PseudoPath />

<svelte:window on:resize={updateCoords} />

<div class="node" on:mousedown={handleMousedown} style="--x: {x}px; --y: {y}px;">
    {#each Object.entries(inputs) as [name]}
        <div class="input">
            <span>{name}</span>
            <div
                class={name}
                bind:this={guiInputs[name]}
                on:mouseup={(e) => {
                    onInputMouseup(e, name);
                }}
                on:mouseleave={(e) => {
                    onInputMouseleave(e, name);
                }}
                on:mousedown|stopPropagation
            />
        </div>
    {/each}
    <svelte:component this={gui} on:resize={updateCoords} id={id}/>
    {#each Object.entries(outputs) as [name]}
        <div class="output">
            <span>{name}</span>
            <div
                class={name}
                bind:this={guiOutputs[name]}
                on:mousedown={(e) => {
                    onOutputMousedown(e, name);
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
        backdrop-filter: blur(6px);
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
