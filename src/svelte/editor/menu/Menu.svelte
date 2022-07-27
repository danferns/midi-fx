<script lang="ts">
    import { addNode } from "src/ts/editor/instances";

    import MenuItem, { menuItem } from "./MenuItem.svelte";

    const nodes = {
        "Input / Output": {
            "External Input": "midi-input",
            "External Output": "midi-output",
            "Typing Keyboard": "typing-keyboard",
            "Serial Controller": "serial-controller",
        },
        Filter: {
            Filter: "filter",
            "Note Splitter": "note-splitter",
        },
        Transform: {
            Delay: "delay",
            Transpose: "transpose",
            Scale: "scale",
        },
        Analysis: {
            "Chord Explorer": "chord-explorer",
        },
    };

    let menu: {
        [key: string]: menuItem;
    } = {
        File: {
            Load: () => {},
            Save: () => {},
            "Save as...": () => {},
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
