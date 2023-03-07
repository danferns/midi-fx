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
    import { addNode } from "src/ts/editor/instances";
    import {
        clearEditorState,
        openEditorStateFilePicker,
        saveEditorState,
        saveEditorStateAsFile,
    } from "src/ts/editor/save";

    import { NODES } from "src/ts/nodes/nodes";

    import MenuItem, { menuItem } from "./MenuItem.svelte";

    let menu: {
        [key: string]: menuItem;
    } = {
        File: {
            Clear: () => {
                clearEditorState();
            },
            Load: () => {
                openEditorStateFilePicker();
            },
            Save: () => {
                saveEditorState();
            },
            "Save as...": () => {
                saveEditorStateAsFile();
            },
        },
        Add: {},
    };

    for (const [category, nodeList] of Object.entries(NODES)) {
        menu.Add[category] = {} as menuItem;

        for (const [node, name] of Object.entries(nodeList)) {
            menu.Add[category][name] = () => {
                addNode(node);
            };
        }

        menu = menu;
    }
</script>

<div>
    {#each Object.entries(menu) as [name, options]}
        <MenuItem {name} {options} />
    {/each}
</div>

<style>
    div {
        position: absolute;
        background: var(--background);
        height: 32px;
        width: 100%;
        z-index: 3;
        display: flex;

        font-family: Arial, Helvetica, sans-serif;
        user-select: none;
    }
</style>
