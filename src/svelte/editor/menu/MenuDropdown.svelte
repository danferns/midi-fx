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
