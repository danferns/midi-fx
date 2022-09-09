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
