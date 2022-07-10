<script lang="ts">
    import { onMount } from "svelte";
    import { createEmitter } from "src/ts/util/NodeUtil";
    import Button from "../widgets/Button.svelte";
    import NodeUi from "../widgets/NodeUI.svelte";
    import NumericInput from "../widgets/NumericInput.svelte";
    import Title from "../widgets/Title.svelte";
    export let id: string;
    export const inputs: NodeInputs = {};
    export const outputs: NodeOutputs = {
        MIDI: new Set(),
    };
    const emit = createEmitter(id, outputs);

    let controlNumber = 1;
    let isSerialSupported = "serial" in navigator;
    let connected = false;

    let reader: ReadableStreamDefaultReader;
    let readableStreamClosed: Promise<void>;
    let port: SerialPort;

    onMount(async () => {
        if (isSerialSupported) {
            const availablePorts = await navigator.serial.getPorts();
            if (availablePorts.length) {
                const defaultPort = availablePorts[0];
                port = defaultPort;
                readSerialPort();
            }
        }
    });

    async function requestSerialConnection() {
        const requestedPort = await navigator.serial.requestPort();
        port = requestedPort;
        readSerialPort();
    }

    async function readSerialPort() {
        connected = true;
        await port.open({ baudRate: 9600 });
        const textDecoder = new TextDecoderStream();
        readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
        reader = textDecoder.readable.getReader();
        // Listen to data coming from the serial device.
        let intString = "";
        while (true) {
            const { value, done } = await reader.read();
            if (done) {
                // Allow the serial port to be closed later.
                reader.releaseLock();
                break;
            }
            for (const letter of value) {
                if (letter === "\n") {
                    const controlValue = parseInt(intString);
                    if (intString && controlValue > 0 && controlValue < 128) {
                        emit("MIDI", 176, controlNumber, controlValue);
                    }
                    intString = "";
                } else {
                    intString += letter;
                }
            }
        }
    }
</script>

{#if isSerialSupported}
    <NodeUi>
        <Title>Serial Connection</Title>
        <Button
            on:click={async () => {
                if (connected) {
                    connected = false;
                    reader.cancel();
                    await readableStreamClosed.catch(() => {});
                    await port.close();
                } else requestSerialConnection();
            }}>Click to {connected ? "Disconnect" : "Connect"}</Button
        >
    </NodeUi>

    <NodeUi>
        <Title>Control Number</Title>
        <NumericInput bind:value={controlNumber} />
    </NodeUi>
{:else}
    <NodeUi>
        <Title>Serial API Unavailable</Title>
    </NodeUi>
{/if}
