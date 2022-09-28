<script lang="ts">
    import type { Colord } from "colord";
    export let label = "C#";
    export let color: Colord;
    export let xAxis = true;
    export let hover = false;
</script>

<div
    style:border={"solid " + color?.toHex()}
    style:border-width="{xAxis ? 5 : 0}px {xAxis ? 0 : 5}px 0px 0px"
    style:background={hover ? "hsl(0 0% 30%)" : "transparent"}
>
    {label}
</div>

<style>
    div {
        height: 20px;
        width: 20px;
        margin: 1px;
        background: hsl(0 0% 20%);
        border-radius: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        transition: border-radius 0.2s, background 0.15s ease-out;
    }
</style>
