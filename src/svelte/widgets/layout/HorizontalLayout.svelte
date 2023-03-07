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
    export let alignItems: "flex-start" | "flex-end" | "center" | "stretch" | "baseline" = "center";
</script>

<div style:align-items={alignItems}><slot /></div>

<style>
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    div > :global(*) {
        flex: 1;
        margin: 0 2px;
    }

    div > :global(*:first-child) {
        margin-left: 0;
    }

    div > :global(*:last-child) {
        margin-right: 0;
    }
</style>
