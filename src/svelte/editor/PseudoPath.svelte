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
<script lang="ts" context="module">
    import { writable } from "svelte/store";
    export const pseudoConnection = writable({
        from: undefined,
    });
</script>

<script lang="ts">
    import Path from "./Path.svelte";
    import { instances } from "src/ts/editor/instances";
    import { translateX, translateY, scale } from "src/ts/editor/transform";

    let insts: LiveInstances;
    instances.subscribe((val: LiveInstances) => {
        insts = val;
    });

    let connection: {
        from: [string, string] | undefined;
    };

    pseudoConnection.subscribe((conn) => {
        connection = conn;
    });

    let mouseX: number;
    let mouseY: number;

    function handleMouseUp() {
        if (connection.from) {
            // cancel connection
            pseudoConnection.update((conn) => {
                conn.from = undefined;
                return conn;
            });
        }
    }
</script>

<svelte:window
    on:pointermove={(e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }}
    on:mouseup={handleMouseUp}
    on:blur={handleMouseUp}
/>

{#if connection.from}
    <Path
        x1={insts[connection.from[0]].outputs[connection.from[1]].x}
        y1={insts[connection.from[0]].outputs[connection.from[1]].y}
        x2={(mouseX - $translateX) / $scale}
        y2={(mouseY - $translateY) / $scale}
    />
{/if}
