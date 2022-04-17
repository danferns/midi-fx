<script lang="ts">
    export let group;
    export let name;

    let inputCheckbox;
</script>

<div>
    <input type="checkbox" bind:group {name} value={name} bind:this={inputCheckbox} />
    <span
        on:click={() => {
            inputCheckbox.checked = !inputCheckbox.checked;
        }}>&nbsp;{name}</span
    >
</div>

<style>
    div {
        padding: 8px;
        font-size: small;
    }
    input[type="checkbox"] {
        appearance: none;
        margin: 0;

        background: var(--background);
        box-shadow: inset var(--background-accent) 0px 0px 0px 2px;
        height: 1.15em;
        width: 1.15em;
        vertical-align: middle;
    }

    input[type="checkbox"]:checked {
        background: var(--background-accent-focused);
        box-shadow: none;
    }

    span {
        vertical-align: middle;
    }
</style>
