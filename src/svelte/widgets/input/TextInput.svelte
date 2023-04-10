<!--

    Copyright (C) 2023 Daniel Fernandes

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
    export let value: string;
    export let hint: string = "";
</script>

<input type="text" bind:value placeholder={hint} on:change class="mousedrag" on:contextmenu|stopPropagation/>

<style>
    input {
        font: inherit;
        color: inherit;
        background: var(--background-accent);
        padding: 16px;
        border: unset;
        border-radius: 8px;
    }

    input:focus {
        background: var(--background-accent-focused);
        outline: none;
    }
</style>
