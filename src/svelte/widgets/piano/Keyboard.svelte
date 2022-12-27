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
<script>
    export let octaves = 2;
    export let middleC = 60;
    export let keysPressed = [];
    export let height = 160;
    export let width = 1400;

    import Key from "./Key.svelte";
    let keys;

    $: keys = [...Array(octaves * 12 + 1).keys()].map(
        (i) => i + (middleC - Math.floor(octaves / 2) * 12)
    );
</script>

<div class="keyboard mousedrag">
    <div style:height="{height - 16}px">
        {#each keys as note}
            <Key
                noteNum={note}
                on:noteon
                on:noteoff
                pressed={keysPressed.includes(note)}
                keyWidth={(width - 16) / (octaves * 7 + 1)}
            />
        {/each}
    </div>
</div>

<style>
    .keyboard {
        display: flex;
        justify-content: center;
        background: var(--background);
        border-radius: 8px;
    }

    .keyboard > div {
        display: flex;
        overflow: auto;
    }
</style>
