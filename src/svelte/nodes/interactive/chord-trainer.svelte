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

<script lang="ts" context="module">
    export const doc: string = `
        Displays a chord and waits for the user to play it.
        If the chord is played correctly, it will be played through the "Success" output, 
        and a new chord will be displayed.
    `;
</script>

<script lang="ts">
    import NodeUi from "src/svelte/widgets/NodeUI.svelte";
    import Table from "src/svelte/widgets/data/Table.svelte";
    import { createEmitter } from "src/ts/util/NodeUtil";

    import { chordShapes } from "../analyze/chord-explorer.svelte";
    import { rootNoteNumToName } from "src/ts/util/Notation";
    import { isNoteOff, isNoteOn } from "../filter/note-splitter.svelte";

    export let id: string;
    export const inputs: NodeInputs = {
        MIDI: (status: number, data1: number, data2: number) => {
            if (isNoteOn(status, data1, data2)) {
                if (!pressedKeys.includes(data1)) {
                    pressedKeys.push(data1);
                    if (isChordMatch(chordList[0])) {
                        success = true;
                        emitPressedKeysOnSuccess();
                    }
                }
            } else if (isNoteOff(status, data1, data2)) {
                pressedKeys = pressedKeys.filter((key) => key !== data1);
                if (successKeyPresses.has(data1)) {
                    successKeyPresses.delete(data1);
                    emit("Success", status, data1, data2);
                }
                if (pressedKeys.length === 0 && success) {
                    success = false;
                    chordList.shift();
                    chordList.push(generateRandomChord());
                    chordList = chordList;
                }
            }
            emit("MIDI", status, data1, data2);
        },
    };
    export const outputs: NodeOutputs = {
        Preview: new Set(),
        MIDI: new Set(),
        Success: new Set(),
    };
    export let state = {};
    const emit = createEmitter(id, outputs);

    type Chord = {
        root: number;
        shape: string;
    };

    let chordList: Chord[] = [];

    function generateRandomChord(): Chord {
        const selectedShapes = ["M", "m"];
        const root = Math.floor(Math.random() * 12);
        const shape = selectedShapes[Math.floor(Math.random() * 2)];
        return { root, shape };
    }

    for (let i = 0; i < 5; i++) {
        chordList.push(generateRandomChord());
    }

    function chordToString(chord: Chord): string {
        return rootNoteNumToName(chord.root) + chord.shape;
    }

    // chord matching algorithm

    let pressedKeys: number[] = [];

    function isChordMatch(chord: Chord): boolean {
        const shape = chordShapes[chord.shape];
        const root = chord.root;

        const chordNotes = new Set(shape.map((note) => (note + root) % 12));

        const pressedSet = new Set(pressedKeys.map((key) => key % 12));

        // return if both sets are equal

        for (const note of chordNotes) {
            if (!pressedSet.has(note)) {
                return false;
            }
        }

        for (const note of pressedSet) {
            if (!chordNotes.has(note)) {
                return false;
            }
        }

        return true;
    }

    let success = false;

    let successKeyPresses: Set<number> = new Set();

    function emitPressedKeysOnSuccess() {
        for (const key of pressedKeys) {
            emit("Success", 144, key, 100);
            successKeyPresses.add(key);
        }
    }
</script>

<NodeUi>
    <div class="bigtext" class:success>{chordToString(chordList[0])}</div>

    <Table
        tableData={chordList
            .map((chord) => {
                return [chordToString(chord)];
            })
            .slice(1)}
        height={122}
    />
</NodeUi>

<style>
    .bigtext {
        font-size: 2em;
        text-align: center;

        padding: 16px;
        padding-bottom: 12px;
        background: var(--background-accent);
        border-radius: 8px;
    }

    .bigtext.success {
        background: var(--background-accent-focused);
    }
</style>
