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
    export let options: string[];
    export let value: string;
</script>

<select on:change bind:value class="mousedrag">
    {#each options as option}
        <option>{option}</option>
    {/each}
</select>

<style>
    select {
        padding: 16px;
        font-family: inherit;
        color: inherit;
        font-size: small;
        letter-spacing: inherit;
    }

    select {
        border-radius: 8px;
        background: hsl(0 0% 20%);
        border-width: 0px;
        width: 100%;
    }

    select:focus {
        outline: none;
        background: hsl(0 0% 30%);
    }

    option {
        padding: 8px;
    }
</style>
