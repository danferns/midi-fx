<script lang="ts">
    export let options;
    export let value;
</script>

<select on:change bind:value>
    {#each options as option}
        <option>{option}</option>
    {/each}
</select>

<style>
    select {
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
