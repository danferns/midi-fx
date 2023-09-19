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
    import { instances } from "src/ts/editor/instances";
    import { writable } from "svelte/store";
    import { importNodeComponent } from "src/ts/nodes/nodes";

    let insts: LiveInstances = {};

    instances.subscribe((val: LiveInstances) => {
        insts = val;
    });

    let info = writable("");
    let type = writable("");
    export async function showInfo(id: string) {
        type.set(insts[id].type);
        const mod = await importNodeComponent(insts[id].type);
        info.set(mod.doc || "No documentation available for this node.");
    }
</script>

<script lang="ts">
    import { onDestroy } from "svelte";
    import Button from "../widgets/input/Button.svelte";

    const close = () => {
        $type = "";
    };

    let modal;

    const handle_keydown = (e) => {
        if (e.key === "Escape") {
            close();
            return;
        }

        if (e.key === "Tab") {
            // trap focus
            const nodes: HTMLElement[] = modal.querySelectorAll("*");
            const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);

            let index = tabbable.indexOf(document.activeElement as HTMLElement);
            if (index === -1 && e.shiftKey) index = 0;

            index += tabbable.length + (e.shiftKey ? -1 : 1);
            index %= tabbable.length;

            tabbable[index].focus();
            e.preventDefault();
        }
    };

    const previously_focused = typeof document !== "undefined" && document.activeElement;

    if (previously_focused) {
        onDestroy(() => {
            (previously_focused as HTMLElement).focus();
        });
    }
</script>

<svelte:window on:keydown={handle_keydown} />

{#if $type}
    <div class="modal-background" on:click={close} />

    <div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
        <h2>{$type}</h2>
        <p>{$info}</p>
        <br />
        <div><Button on:click={close}>OK</Button></div>
    </div>
{/if}

<style>
    .modal-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        z-index: 3;
    }

    .modal {
        position: absolute;
        left: 50%;
        top: 50%;
        width: calc(100vw - 4em);
        max-width: 32em;
        max-height: calc(100vh - 4em);
        overflow: auto;
        transform: translate(-50%, -50%);
        padding: 1em;
        border-radius: 0.2em;
        background: var(--background);
        z-index: 3;
        border-radius: 16px;
        box-shadow: black 0px 0px 64px 16px;
    }

    p {
        line-height: 2.5ch;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 100;
    }

    div {
        float: right;
    }
</style>
