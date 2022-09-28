<script lang="ts">
    import type { Colord } from "colord";
    import MatrixAxisBlock from "./MatrixAxisBlock.svelte";
    import MatrixBlock from "./MatrixBlock.svelte";
    export let xArray: { name: string; color?: Colord }[];
    export let yArray: { name: string; color?: Colord }[];
    export let state: number[][];

    let hover = [-1, -1];
</script>

<div class="matrix">
    <div class="row">
        <div class="block" />
        {#each xArray as x, i}
            <MatrixAxisBlock label={x.name} color={x.color} xAxis={true} hover={hover[0] === i} />
        {/each}
    </div>
    {#each yArray as y, j}
        <div class="row">
            <MatrixAxisBlock label={y.name} color={y.color} xAxis={false} hover={hover[1] === j} />
            {#each xArray as x, i}
                <MatrixBlock
                    bind:state={state[i][j]}
                    on:mouseover={() => {
                        hover = [i, j];
                    }}
                    on:mouseleave={() => {
                        hover = [-1, -1];
                    }}
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
