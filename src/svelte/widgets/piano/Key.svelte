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
<script>
    export let noteNum;
    export let keyWidth = 56;
    export let pressed = false;

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    let isNatural = ![1, 3, 6, 8, 10].includes(noteNum % 12);
    let bias = 0;

    // the accidental keys are not perfectly in center
    $: {
        if (!isNatural) {
            if ([1, 6].includes(noteNum % 12)) bias = -keyWidth / 18;
            else if ([3, 10].includes(noteNum % 12)) bias = keyWidth / 18;
        }
    }

    function keyPressed() {
        if (pressed) return;
        dispatch("noteon", noteNum);
        pressed = true;
    }

    function keyReleased() {
        if (!pressed) return;
        dispatch("noteoff", noteNum);
        pressed = false;
    }
</script>

<div
    class:accidental={!isNatural}
    class:natural={isNatural}
    class:pressed
    style="--width: {keyWidth - keyWidth * 0.47 * +!isNatural}px; transform: translate({bias}px);"
    draggable="false"
    on:mousedown|preventDefault={keyPressed}
    on:mouseup|preventDefault={keyReleased}
    on:mouseenter={(e) => {
        if (e.buttons) keyPressed();
    }}
    on:mouseleave={(e) => {
        if (e.buttons) keyReleased();
    }}
    on:touchstart|preventDefault={keyPressed}
    on:touchend|preventDefault={keyReleased}
/>

<style>
    div {
        flex-shrink: 0;
        width: var(--width);
        min-width: min-content;

        border-radius: 0px 0px calc(var(--width) / 8) calc(var(--width) / 8);
        -webkit-user-drag: none;
    }

    .accidental {
        margin: 0px calc(var(--width) / -2) 0px calc(var(--width) / -2);
        z-index: 2;

        height: 60%;
        background: black;
    }

    .natural {
        height: 100%;
        background: white;
        box-shadow: inset var(--background) 0px 0px 0px 0.5px;
    }

    .accidental.pressed {
        background: hsl(0 0% 30%);
    }

    .natural.pressed {
        background: hsl(0 0% 90%);
    }

    div:first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    div:last-child {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
</style>
