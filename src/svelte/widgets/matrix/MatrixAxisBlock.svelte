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
    import { beforeUpdate } from "svelte";
    export let label = "";
    export let color: Colord;
    export let xAxis = true;
    export let hover = false;
    export let highlight = false;

    let opacity = 0;
    let isAnimating = false;

    beforeUpdate(() => {
        if (highlight === true) {
            opacity = 1;
            if (!isAnimating) {
                isAnimating = true;
                fadeOut();
            }
        }
    });

    function fadeOut() {
        if (opacity > 0) {
            opacity = Math.max(opacity - 0.05, 0);
            requestAnimationFrame(fadeOut);
        } else {
            isAnimating = false;
        }
    }
</script>

<div
    style:border={"solid " + color?.toHex()}
    style:border-width="{xAxis ? 5 : 0}px {xAxis ? 0 : 5}px 0px 0px"
    style:background={hover ? "hsl(0 0% 30%)" : `hsla(0, 0%, 30%, ${opacity * 100}%)`}
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
        transition: border-radius 0.2s;
    }
</style>
