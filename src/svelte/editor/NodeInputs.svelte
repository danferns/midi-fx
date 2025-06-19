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
<script lang="ts">
    import Port, { PortType } from "./Port.svelte";

    export let id: string;
    export let inputs: string[] = [];
    export let handles = {};
</script>

<div class="node-inputs">
    {#each inputs as name}
        <Port type={PortType.Input} {name} {id} bind:handle={handles[name]} />
    {/each}
</div>

<style>
    .node-inputs {
        width: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
</style>
