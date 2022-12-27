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
    import { createEmitter } from "src/ts/util/NodeUtil";
    import { createEventDispatcher } from "svelte";
    import Button from "../widgets/Button.svelte";
    import FoldingLayout from "../widgets/FoldingLayout.svelte";
    import HorizontalLayout from "../widgets/HorizontalLayout.svelte";
    import NodeUi from "../widgets/NodeUI.svelte";
    import NumericButtonInput from "../widgets/NumericButtonInput.svelte";
    import Keyboard from "../widgets/piano/Keyboard.svelte";
    import ResizeCorner from "../widgets/ResizeCorner.svelte";
    import Title from "../widgets/Title.svelte";
    import VerticalLayout from "../widgets/VerticalLayout.svelte";
    import { isNoteOff, isNoteOn } from "./note-splitter.svelte";
    import { definition as faGear } from "@fortawesome/free-solid-svg-icons/faGear";
    import Fa from "svelte-fa";
    import { boundValue } from "src/ts/util/MathUtil";
    export let id: string;
    export const inputs: NodeInputs = {
        MIDI: (status, data1, data2) => {
            emit("MIDI", status, data1, data2);
            if (isNoteOn(status, data1, data2)) {
                activeKeys.add(data1);
                activeKeys = activeKeys;
            } else if (isNoteOff(status, data1, data2)) {
                activeKeys.delete(data1);
                activeKeys = activeKeys;
            }
        },
    };
    export const outputs: NodeOutputs = {
        MIDI: new Set(),
    };
    export let state = {
        octaves: 2,
        middleOctave: 5,
        showGui: true,
        height: 90,
        width: 550,
    };
    const emit = createEmitter(id, outputs);
    const dispatch = createEventDispatcher();

    let activeKeys = new Set<number>();

    function noteOn(event) {
        const note = event.detail;
        emit("MIDI", 144, note, 127);
    }

    function noteOff(event) {
        const note = event.detail;
        emit("MIDI", 144, note, 0);
    }
</script>

<FoldingLayout folded={!state.showGui} on:resize>
    <NodeUi>
        <HorizontalLayout>
            <Title>Octaves</Title>
            <NumericButtonInput bind:value={state.octaves} />
            <Title>Middle C</Title>
            <NumericButtonInput bind:value={state.middleOctave} />
        </HorizontalLayout>
    </NodeUi>
</FoldingLayout>

<NodeUi>
    <HorizontalLayout alignItems="flex-end">
        <Keyboard
            octaves={state.octaves}
            middleC={state.middleOctave * 12}
            on:noteon={noteOn}
            on:noteoff={noteOff}
            keysPressed={[...activeKeys.values()]}
            height={state.height}
            width={state.width}
        />
        <VerticalLayout>
            <Button
                on:click={() => {
                    state.showGui = !state.showGui;
                }}
                padding={8}
            >
                <Fa icon={faGear} />
            </Button>

            <ResizeCorner
                onResize={(dx, dy) => {
                    state.width = boundValue(state.width + 2 * dx, 550, 10000);
                    state.height = boundValue(state.height + 2 * dy, 82, 10000);
                    dispatch("resize");
                }}
            />
        </VerticalLayout>
    </HorizontalLayout>
</NodeUi>
