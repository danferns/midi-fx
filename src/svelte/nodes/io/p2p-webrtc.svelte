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
    Sends MIDI messages to other devices running MIDI-FX over the internet.
    It uses WebRTC to establish a peer-to-peer connection between the devices.
    `;
</script>

<script lang="ts">
    import NodeUi from "src/svelte/widgets/NodeUI.svelte";
    import Title from "src/svelte/widgets/info/Title.svelte";
    import Button from "src/svelte/widgets/input/Button.svelte";
    import TextInput from "src/svelte/widgets/input/TextInput.svelte";
    import HorizontalLayout from "src/svelte/widgets/layout/HorizontalLayout.svelte";
    import { createEmitter } from "src/ts/util/NodeUtil";
    import { Peer, DataConnection } from "peerjs";
    import { createEventDispatcher, onMount } from "svelte";

    type MIDIMessage = {
        status: number;
        data1: number;
        data2: number;
    };

    export let id: string;
    export const inputs: NodeInputs = {
        MIDI: (status: number, data1: number, data2: number) => {
            if (!connection) return;
            connection.send({ status, data1, data2 });
        },
    };
    export const outputs: NodeOutputs = {
        MIDI: new Set(),
    };

    export let state = {
        localId: "",
        remoteId: "",
    };
    const emit = createEmitter(id, outputs);

    const dispatch = createEventDispatcher();

    const serverNamespace = "midi-fx-";

    let peer: Peer;
    let connected = false;

    let connection: DataConnection;

    function setupRTC() {
        peer = new Peer(serverNamespace + state.localId);

        peer.on("connection", (conn) => {
            connected = true;
            connection = conn;
            state.remoteId = conn.peer.replace(serverNamespace, "");
            conn.on("data", (data: MIDIMessage) => {
                const { status, data1, data2 } = data;
                emit("MIDI", status, data1, data2);
            });
        });
    }

    function connectWithPeer() {
        connection = peer.connect(serverNamespace + state.remoteId);
        connection.on("open", () => {
            connected = true;
            connection.on("data", (data: MIDIMessage) => {
                const { status, data1, data2 } = data;
                emit("MIDI", status, data1, data2);
            });

            connection.on("close", () => {
                connected = false;
                peer.destroy();
                peer = undefined;
            });

            connection.on("error", (err) => {
                console.error(err);
                connection.close();
            });
        });
    }

    onMount(async () => {
        if (state.localId) {
            setupRTC();
            if (state.remoteId) {
                setTimeout(connectWithPeer, 1000);
            }
        }
    });

    function disconnect() {
        connection.close();
        connected = false;
        peer.destroy();
        peer = undefined;
    }

    $: {
        // resize node if these variables change
        peer;
        connected;
        dispatch("resize");
    }
</script>

<NodeUi>
    {#if peer === undefined}
        <HorizontalLayout>
            <TextInput bind:value={state.localId} hint="Enter your ID..." />
            <Button on:click={setupRTC}>Go</Button>
        </HorizontalLayout>
    {:else}
        <Title>You are <b>{state.localId}</b></Title>
    {/if}

    <div />

    {#if !connected}
        <HorizontalLayout>
            <TextInput bind:value={state.remoteId} hint="Enter remote ID..." />
            <Button on:click={connectWithPeer}>Connect</Button>
        </HorizontalLayout>
    {:else}
        <Title>Connected to <b>{state.remoteId}</b></Title>
        <Button on:click={() => disconnect()}>Disconnect</Button>
    {/if}
</NodeUi>

<style>
    div {
        height: 4px;
    }
</style>
