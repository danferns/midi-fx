<script lang="ts">
    import { addNode } from "src/ts/editor/instances";
    import {
        clearEditorState,
        openEditorStateFilePicker,
        saveEditorState,
        saveEditorStateAsFile,
    } from "src/ts/editor/save";

    import MenuItem, { menuItem } from "./MenuItem.svelte";

    const nodes = {
        "Input / Output": {
            "External Input": "midi-input",
            "External Output": "midi-output",
            "Typing Keyboard": "typing-keyboard",
            "Serial Input": "serial-input",
            "Virtual Piano": "virtual-piano",
        },
        Filter: {
            Filter: "filter",
            "Note Splitter": "note-splitter",
        },
        Transform: {
            Delay: "delay",
            Transpose: "transpose",
            Scale: "scale",
            "Channel Mapper": "channel-mapper",
            "Velocity to CC": "velocity-to-cc",
        },
        Analysis: {
            "Chord Explorer": "chord-explorer",
            "CC Visualizer": "cc-visualizer",
        },
    };

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

    for (const [category, nodeList] of Object.entries(nodes)) {
        menu.Add[category] = {} as menuItem;

        for (const [name, node] of Object.entries(nodeList)) {
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
