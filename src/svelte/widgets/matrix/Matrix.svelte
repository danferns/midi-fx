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
    import type { Colord } from "colord";
    import MatrixAxisBlock from "./MatrixAxisBlock.svelte";
    import MatrixBlock from "./MatrixBlock.svelte";
    export let xArray: { name: string; color?: Colord }[];
    export let yArray: { name: string; color?: Colord }[];
    export let state: number[][];
    export let xHighlight: Set<number> = new Set();
    export let yHighlight: Set<number> = new Set();
    export let YIsInput: boolean = false;

    let matrixHighlight: number[][] = [[]];

    // update highlight matrix dimensions if state matrix dimensions have changed

    $: {
        if (
            matrixHighlight.length !== state.length ||
            matrixHighlight[0].length !== state[0].length
        ) {
            matrixHighlight = Array(state.length)
                .fill(0)
                .map(() => Array(state[0].length).fill(0));
        }
    }

    // highlight output axis when input axis is highlighted

    $: {
        let xHighlightUpdate: Set<number> = new Set();
        let yHighlightUpdate: Set<number> = new Set();
        matrixHighlight.forEach((row, i) => {
            row.forEach((_, j) => {
                if (state[i][j] !== 0) {
                    if (!YIsInput) {
                        if (xHighlight.has(i)) {
                            matrixHighlight[i][j] = 1;
                            yHighlightUpdate.add(j);
                        } else {
                            matrixHighlight[i][j] = 0;
                        }
                    } else {
                        if (yHighlight.has(j)) {
                            matrixHighlight[i][j] = 1;
                            xHighlightUpdate.add(i);
                        } else {
                            matrixHighlight[i][j] = 0;
                        }
                    }
                } else {
                    matrixHighlight[i][j] = 0;
                }
            });
        });

        if (!YIsInput) yHighlight = yHighlightUpdate;
        else xHighlight = xHighlightUpdate;
    }

    let hover = [-1, -1]; // keep track of which matrix block is being hovered over
</script>

<div class="matrix">
    <div class="row">
        <div class="block" />
        {#each xArray as x, i}
            <MatrixAxisBlock
                label={x.name}
                color={x.color}
                xAxis={true}
                hover={hover[0] === i}
                highlight={xHighlight.has(i)}
            />
        {/each}
    </div>
    {#each yArray as y, j}
        <div class="row">
            <MatrixAxisBlock
                label={y.name}
                color={y.color}
                xAxis={false}
                hover={hover[1] === j}
                highlight={yHighlight.has(j)}
            />
            {#each xArray as x, i}
                <MatrixBlock
                    bind:state={state[i][j]}
                    on:mouseover={() => {
                        hover = [i, j];
                    }}
                    on:mouseleave={() => {
                        hover = [-1, -1];
                    }}
                    highlight={matrixHighlight[i][j] == 1}
                />
            {/each}
        </div>
    {/each}
</div>

<style>
    div.matrix {
        display: flex;
        flex-direction: column-reverse;
    }
    div.row {
        display: flex;
    }
    div.block {
        height: 25px;
        width: 25px;
        margin: 1px;
    }
</style>
