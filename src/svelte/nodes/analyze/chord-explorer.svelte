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
    export const doc: string = `Displays which chords are being played at its input.
    It recognizes chords based on patterns defined in its built-in dictionary.`;

    export const chordShapes: { [key: string]: number[] } = {
        M: [0, 4, 7],
        "(9)": [0, 2, 4, 7],
        "6": [0, 4, 7, 9],
        mM7: [0, 3, 7, 11],
        M7: [0, 4, 7, 11],
        m: [0, 3, 7],
        "m(9)": [0, 2, 3, 7],
        m6: [0, 3, 7, 9],
        "m7(9)": [0, 2, 3, 7, 10],
        m7: [0, 3, 7, 10],
        m7b5: [0, 3, 6, 10],
        "7": [0, 4, 7, 10],
        "7(b9)": [0, 1, 4, 7, 10],
        "7(9)": [0, 2, 4, 7, 10],
        "7(#9)": [0, 3, 4, 7, 10],
        "7(b13)": [0, 4, 7, 8, 10],
        "7(13)": [0, 4, 7, 9, 10],
        "7(#11)": [0, 4, 6, 7, 10],
        dim7: [0, 3, 6, 9],
        dim: [0, 3, 6],
        "7aug": [0, 4, 8, 10],
        aug: [0, 4, 8],
        "7sus4": [0, 5, 7, 10],
        sus4: [0, 5, 7],
    };
</script>

<script lang="ts">
    import { rootNoteNumToName } from "src/ts/util/Notation";
    import { createEmitter } from "src/ts/util/NodeUtil";
    import NodeUi from "../../widgets/NodeUI.svelte";
    import { isNoteOff, isNoteOn } from "../filter/note-splitter.svelte";
    import { createEventDispatcher } from "svelte";
    export let id: string;
    export const inputs: NodeInputs = {
        MIDI: (status, data1, data2) => {
            if (isNoteOn(status, data1, data2)) {
                pressedKeys.add(data1);
                updateChords();
            } else if (isNoteOff(status, data1, data2)) {
                pressedKeys.delete(data1);
                updateChords();
            }
            emit("MIDI", status, data1, data2);
        },
    };
    export const outputs: NodeOutputs = {
        MIDI: new Set(),
    };
    const emit = createEmitter(id, outputs);
    const dispatch = createEventDispatcher();

    let matchedChords = [];

    let pressedKeys = new Set();

    function updateChords() {
        const chord = new Set<number>();
        pressedKeys.forEach((key: number) => chord.add(key % 12));

        const matchArray = [];

        for (const [name, shape] of Object.entries(chordShapes)) {
            const rootNote = isChordOfShape(chord, shape);
            if (typeof rootNote === "number") {
                matchArray.push(`${rootNoteNumToName(rootNote)}${name}`);
            }
        }

        matchedChords = matchArray;
        dispatch("resize");
    }

    function isChordOfShape(chord: Set<number>, shape: Array<number>) {
        if (chord.size !== shape.length) return false;

        for (const rootNote of chord) {
            // do we get a matching chord shape with this root note?
            let matchedNotes = 0;
            for (const shapeNote of shape) {
                if (chord.has((rootNote + shapeNote) % 12)) matchedNotes++;
                else break;
            }

            if (matchedNotes === chord.size) return rootNote;
        }
    }
</script>

<NodeUi width={200}>
    <div>{matchedChords.join(", ") || ""}</div>
</NodeUi>

<style>
    div {
        background: var(--background-accent);
        height: 50px;
        border-radius: 8px;
        font-size: larger;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
