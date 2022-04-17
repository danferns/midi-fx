<script lang="ts">
    export let group: string[];
    export let name: string;
    export let checked: boolean = false;

    let inputCheckbox;

    $: updateChekbox(group);
    $: updateGroup(checked);

    function updateChekbox(group) {
        checked = group.indexOf(name) >= 0;
    }

    function updateGroup(checked) {
        const index = group.indexOf(name);
        if (checked) {
            if (index < 0) {
                group.push(name);
                group = group;
            }
        } else {
            if (index >= 0) {
                group.splice(index, 1);
                group = group;
            }
        }
    }
</script>

<div>
    <input type="checkbox" {name} value={name} bind:this={inputCheckbox} bind:checked />
    <span
        on:click={() => {
            inputCheckbox.click();
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
