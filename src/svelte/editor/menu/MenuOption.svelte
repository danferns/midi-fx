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
   export let name: string;
   export let option: (any) => (any);
</script>

<div on:click={option}>&nbsp;&nbsp;{name}&nbsp;&nbsp;&nbsp;&nbsp;</div>

<style>
    div {
        border-radius: 2px;
        padding: 12px;
        box-sizing: border-box;
        height: 40px;
        background: var(--background);
    }

    div:hover {
        background: var(--background-accent);
    }
</style>
