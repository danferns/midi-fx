<script lang="ts">
    import type { menuItem } from "./MenuItem.svelte";
    import MenuOption from "./MenuOption.svelte";
    export let name: string;
    export let options: menuItem | ((any) => any);
</script>

<div class="option">
    <div class="name">&nbsp;&nbsp;{name}&nbsp;&nbsp;&gt;&nbsp;&nbsp;</div>
    <div class="submenu">
        {#each Object.entries(options) as [name, option]}
            {#if typeof option === "function"}
                <MenuOption {name} {option} />
            {:else}
                <svelte:self {name} options={option} />
            {/if}
        {/each}
    </div>
</div>

<style>
    .option {
        height: 26px;
        box-sizing: border-box;
    }
    .name {
        border-radius: 2px;
        padding: 4px;
        height: 26px;
        box-sizing: border-box;
        width: 100%;
    }

    .name:hover {
        background: var(--background-accent);
    }

    .submenu {
        display: none;
        position: relative;
        left: 100%;
        top: -24px;
    }

    div:is(:hover, :active) > div.submenu {
        display: block;
    }
</style>
