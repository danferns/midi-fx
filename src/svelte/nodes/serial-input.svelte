<script lang="ts">
    import { onMount } from "svelte";
    import { createEmitter } from "src/ts/util/NodeUtil";
    import Button from "../widgets/Button.svelte";
    import NodeUi from "../widgets/NodeUI.svelte";
    import Title from "../widgets/Title.svelte";
    import DropDown from "../widgets/DropDown.svelte";
    export let id: string;
    export const inputs: NodeInputs = {};
    export const outputs: NodeOutputs = {
        MIDI: new Set(),
    };
    export let state = {
        baudRate: "9600",
        connected: false,
    };
    const emit = createEmitter(id, outputs);

    const baudRateOptions = ["9600", "14400", "19200", "28800", "38400", "57600", "115200"];

    let isSerialSupported = "serial" in navigator;

    let reader: ReadableStreamDefaultReader;
    let port: SerialPort;

    onMount(async () => {
        if (isSerialSupported) {
            const availablePorts = await navigator.serial.getPorts();
            if (availablePorts.length) {
                const defaultPort = availablePorts[0];
                port = defaultPort;
                if (state.connected) {
                    readSerialPort();
                }
            }
        }
    });

    async function requestSerialConnection() {
        const requestedPort = await navigator.serial.requestPort();
        port = requestedPort;
        readSerialPort();
    }

    async function readSerialPort() {
        state.connected = true;
        await port.open({ baudRate: parseInt(state.baudRate) });
        while (port.readable && state.connected) {
            reader = port.readable.getReader();
            try {
                while (true) {
                    const { value, done } = await reader.read();
                    if (done) {
                        break;
                    }
                    processSerialMessage(value);
                }
            } catch (error) {
                console.error(error);
            } finally {
                reader.releaseLock();
            }
        }
    }

    let tempMessage = [];

    function processSerialMessage(message: Uint8Array) {
        tempMessage.push(...message);
        while (tempMessage.length >= 3) {
            const [status, data1, data2] = tempMessage.splice(0, 3);
            emit("MIDI", status, data1, data2);
        }
    }
</script>

{#if isSerialSupported}
    <NodeUi>
        <Title>Serial Connection</Title>
        <Button
            on:click={async () => {
                if (state.connected) {
                    state.connected = false;
                    reader.cancel();
                    reader.releaseLock();
                    await port.close();
                } else requestSerialConnection();
            }}>Click to {state.connected ? "Disconnect" : "Connect"}</Button
        >
    </NodeUi>

    <NodeUi>
        <Title>Baud Rate</Title>
        <DropDown options={baudRateOptions} bind:value={state.baudRate} />
    </NodeUi>
{:else}
    <NodeUi>
        <Title>Serial API Unavailable</Title>
    </NodeUi>
{/if}
