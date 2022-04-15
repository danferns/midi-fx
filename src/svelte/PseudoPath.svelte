<script lang="ts" context="module">
    import { writable } from "svelte/store";
    export const pseudoConnection = writable({
        from: undefined,
        to: undefined,
    });
</script>

<script lang="ts">
    import Path from "./Path.svelte";
    import { instances } from "../ts/editor/instances";
    import { translateX, translateY } from "./MidiNodes.svelte";

    let insts;
    instances.subscribe((val) => {
        insts = val;
    });

    let connection: {
        from: [string, string] | undefined;
        to: [string, string] | undefined;
    };

    pseudoConnection.subscribe((conn) => {
        connection = conn;
    });

    let mouseX: number;
    let mouseY: number;

    function handleMouseUp() {
        if (connection.from && !connection.to) {
            // cancel connection
            pseudoConnection.update((conn) => {
                conn.from = undefined;
                return conn;
            });
        }
    }
</script>

<svelte:window
    on:mousemove={(e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }}
    on:mouseup={handleMouseUp}
    on:blur={handleMouseUp}
/>

{#if connection.from && !connection.to}
    <Path
        x1={insts[connection.from[0]].outputs[connection.from[1]].x}
        y1={insts[connection.from[0]].outputs[connection.from[1]].y}
        x2={mouseX - $translateX}
        y2={mouseY - $translateY}
    />
{/if}
