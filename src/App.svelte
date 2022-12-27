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
    import MidiNodes from "./svelte/editor/NodeEditor.svelte";
</script>

<main>
    <MidiNodes />
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Comfortaa&display=swap");
    :global(body) {
        font-family: "Comfortaa", sans-serif;
        letter-spacing: 0.075ch;
        background: black;
        color: white;
    }
    :global(html, body, #app) {
        height: 100%;
        width: 100%;
        margin: 0px;
        overflow: clip;
    }
    main {
        height: 100%;
        width: 100%;
    }
</style>
