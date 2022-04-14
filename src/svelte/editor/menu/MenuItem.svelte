<script lang="ts" context="module">
    export type menuItem = {
        [key: string]: menuItem | ((any) => any);
    };
</script>

<script lang="ts">
    import MenuOption from "./MenuOption.svelte";
    import MenuDropdown from "./MenuDropdown.svelte";
    export let name: string;
    export let options: menuItem;

    let buttonWidth: number;
</script>

<div class="menuitem" style="width: {buttonWidth + 8}px">
    <div class="button" bind:clientWidth={buttonWidth}>{name}</div>
    <div class="dropdown">
        {#each Object.entries(options) as [name, option]}
            {#if typeof option === "function"}
                <MenuOption {name} {option} />
            {:else}
                <MenuDropdown {name} options={option} />
            {/if}
        {/each}
    </div>
</div>

<style>
    div.menuitem {
        height: 32px;
    }

    div.button {
        height: 24px;
        padding: 8px 4px 0px 4px;
        width: max-content;

        padding: 4px;
        height: 18px;
        margin: 3px;
        border-radius: 2px;
    }

    div.button:active,
    div.button:hover {
        background: var(--background-accent);
    }

    div.dropdown {
        display: none;
        position: sticky;

        background: var(--background);
        width: max-content;
        border-radius: 4px;
        padding: 2px;
    }

    div.menuitem:is(:hover, :active) > div.dropdown {
        display: block;
    }

    div.menuitem:is(:hover, :active) > div.button {
        background: var(--background-accent);
    }
</style>
