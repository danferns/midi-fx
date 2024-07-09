<!--

    Copyright (C) 2024 Daniel Fernandes

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
    export enum PortType {
        Input,
        Output,
    }

    import { createConnection, destroyConnection, instances } from "src/ts/editor/instances";
    import { pseudoConnection } from "./PseudoPath.svelte";

    function primaryButtonPressed(e: PointerEvent) {
        return e.pointerType !== "mouse" || e.buttons === 1;
    }
</script>

<script lang="ts">
    export let type: PortType;
    export let id: string; // id of node
    export let name: string;
    export let handle: HTMLDivElement; // the element that the user can drag from

    function onPointerDown(e: PointerEvent) {
        if (type === PortType.Input) {
            if (primaryButtonPressed(e)) {
                e.stopPropagation();

                function onInputPointerleave(e: PointerEvent) {
                    if (primaryButtonPressed(e)) {
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
        } else if (type === PortType.Output) {
            if (primaryButtonPressed(e)) {
                e.stopPropagation();

                pseudoConnection.update((val) => {
                    val.from = [id, name];
                    return val;
                });
            }
        }
    }

    function onPointerUp(e: PointerEvent) {
        if (type === PortType.Input) {
            pseudoConnection.update((val) => {
                if (val.from) {
                    createConnection(val.from[0], val.from[1], [id, name]);
                    val.from = undefined;
                }
                return val;
            });
        }
    }
</script>

<div class="port" class:input={type === PortType.Input} class:output={type === PortType.Output}>
    <div
        class="handle"
        bind:this={handle}
        class:midi={name === "MIDI"}
        on:pointerdown={onPointerDown}
        on:pointerup={onPointerUp}
    >
        <span>{name}</span>
    </div>
</div>

<style>
    .port {
        writing-mode: vertical-lr;
        color: black;
        font-size: 12px;
        margin: 4px 0px;
        padding: 0px;
        width: 24px;
    }

    .handle {
        padding: 6px 4px;
        background: white;
    }

    .input .handle {
        border-radius: 6px 0 0 6px;
    }

    .output .handle {
        border-radius: 0 6px 6px 0;
    }

    .handle:hover {
        background: hsl(0 0% 10%) !important;
        color: white;
    }

    .midi {
        background: hsl(160 90% 60%);
    }
</style>
