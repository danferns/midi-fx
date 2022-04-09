<script lang="ts" context="module">
    export const inputs = {};
    export const outputs = {
        MIDI: new Set(),
    };

    function emit(output, ...data) {
        for (const receiver of outputs[output]) {
            receiver.call(...data);
        }
    }
</script>

<script lang="ts">
    import { storage } from "../../ts/storage";
    import { onMount, createEventDispatcher, tick } from "svelte";
    import { Input, WebMidi, Message } from "webmidi";

    const dispatch = createEventDispatcher();

    let inputNames: Array<string> = [];
    let activeInput: Input;
    let activeInputName: string;

    onMount(() => {
        WebMidi.addOneTimeListener("enabled", async () => {
            const inputs = WebMidi.inputs;
            for (const input of inputs) {
                inputNames.push(input.name);
            }
            const lastInput = await inputStore.getValue();
            if (inputNames.includes(lastInput)) {
                changeInput(lastInput);
            }
            updateInputs();
        });
    });

    async function updateInputs() {
        inputNames = inputNames;
        await tick();
        dispatch("resize", {});
    }

    const inputStore = new storage.local("input");

    function onInputChange(e: Event) {
        const selection = e.target as HTMLSelectElement;
        blurTarget(selection);
        changeInput(selection.value);
        inputStore.setValue(selection.value);
    }

    function changeInput(name: string) {
        activeInputName = name;
        activeInput?.removeListener("midimessage", onInput);
        activeInput = WebMidi.getInputByName(name);
        activeInput.addListener("midimessage", onInput);
    }

    function onInput(event) {
        const message = event.message as Message;
        const status = message.data[0];
        const data1 = message.rawDataBytes[0];
        const data2 = message.rawDataBytes[1];
        emit("MIDI", status, data1, data2);
    }

    function blurTarget(target: HTMLSelectElement) {
        target.blur();
    }
</script>

<main>
    <div>
        <span>Input Device</span>
        <select on:change={onInputChange} bind:value={activeInputName}>
            {#each inputNames as input}
                <option>{input}</option>
            {/each}
        </select>
    </div>
</main>

<style>
    div {
        display: block;
        margin: 8px;
        background: hsl(0 0% 10%);
        border-radius: 12px;
    }
    span {
        display: block;
        text-align: center;
    }

    select,
    span {
        padding: 16px;
        font-family: inherit;
        color: inherit;
        font-size: small;
        letter-spacing: inherit;
    }

    select {
        border-radius: 8px;
        background: hsl(0 0% 20%);
        border-width: 0px;
        width: 100%;
    }

    select:focus {
        outline: none;
        background: hsl(0 0% 30%);
    }

    option {
        padding: 8px;
    }
</style>
