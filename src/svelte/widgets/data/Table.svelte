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
    import VerticalScrollLayout from "../layout/VerticalScrollLayout.svelte";

    export let tableData: unknown[][] = [];
    export let tableHeaders: string[] = [];
    export let height: number = 200;
</script>

<div class="table">
    <div class="table-header">
        {#each tableHeaders as header}
            <div class="table-header-cell">
                {header}
            </div>
        {/each}
    </div>
    <VerticalScrollLayout height={height}>
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
