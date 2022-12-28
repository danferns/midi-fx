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
    import Button from "./Button.svelte";

    export let value: number;
    export let increment: number = 1;
    export let decrement: number = 1;
</script>

<div>
    <Button
        on:click={() => {
            value -= decrement;
        }}>-{decrement}</Button
    >
    <input type="number" bind:value style:width="4ch" />
    <Button
        on:click={() => {
            value += increment;
        }}>+{increment}</Button
    >
</div>

<style>
    div {
        background: var(--background-accent);
        border-radius: 8px;
        display: flex;
        flex: 0;
    }
    input {
        font: inherit;
        color: inherit;
        background: var(--background-accent);
        padding: 16px;
        border: unset;
        border-radius: 8px;
        text-align: center;
    }
    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input:focus {
        background: var(--background-accent-focused);
        outline: none;
    }
</style>
