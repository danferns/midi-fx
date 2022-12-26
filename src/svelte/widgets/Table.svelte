<script lang="ts">
    import VerticalScrollLayout from "./VerticalScrollLayout.svelte";

    export let tableData: unknown[][] = [];
    export let tableHeaders: string[] = [];
</script>

<div class="table">
    <div class="table-header">
        {#each tableHeaders as header}
            <div class="table-header-cell">
                {header}
            </div>
        {/each}
    </div>
    <VerticalScrollLayout height={200}>
        <div class="table-body">
            {#each tableData as row}
                <div class="table-row">
                    {#each row as cell}
                        <div class="table-cell">
                            {cell != undefined ? cell : ""}
                        </div>
                    {/each}
                </div>
            {/each}
        </div>
    </VerticalScrollLayout>
</div>

<style>
    .table {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        overflow: clip;
    }

    .table-header {
        display: flex;
        flex-direction: row;
        width: 100%;
        background-color: var(--background-accent);
        color: white;
    }

    .table-header-cell {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 8px;
        align-items: center;
        justify-content: center;
    }

    .table-body {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    .table-row {
        display: flex;
        flex-direction: row;
        width: 100%;
        background-color: hsl(0 0% 50% / 10%);
        color: white;
    }

    .table-row:nth-child(even) {
        background-color: hsl(0 0% 0% / 0%);
    }

    .table-cell {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: center;
        padding: 6px;
    }
</style>
