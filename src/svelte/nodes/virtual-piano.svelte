<script lang="ts">
    import { createEmitter } from "src/ts/util/NodeUtil";
    import Button from "../widgets/Button.svelte";
    import FoldingLayout from "../widgets/FoldingLayout.svelte";
    import HorizontalLayout from "../widgets/HorizontalLayout.svelte";
    import NodeUi from "../widgets/NodeUI.svelte";
    import NumericButtonInput from "../widgets/NumericButtonInput.svelte";
    import Keyboard from "../widgets/piano/Keyboard.svelte";
    import Title from "../widgets/Title.svelte";
    import VerticalLayout from "../widgets/VerticalLayout.svelte";
    import { isNoteOff, isNoteOn } from "./note-splitter.svelte";
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
    };
    const emit = createEmitter(id, outputs);

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
    <HorizontalLayout>
        <NodeUi>
            <Title>Octaves</Title>
            <NumericButtonInput bind:value={state.octaves} />
        </NodeUi>
        <NodeUi>
            <Title>Middle C</Title>
            <NumericButtonInput bind:value={state.middleOctave} />
        </NodeUi>
    </HorizontalLayout>
</FoldingLayout>

<NodeUi>
    <HorizontalLayout>
        <Keyboard
            octaves={state.octaves}
            middleC={state.middleOctave * 12}
            on:noteon={noteOn}
            on:noteoff={noteOff}
            keysPressed={[...activeKeys.values()]}
        />
        <VerticalLayout>
            <Button
                on:click={() => {
                    state.showGui = !state.showGui;
                }}>GUI</Button
            >
        </VerticalLayout>
    </HorizontalLayout>
</NodeUi>
