<!--

    Copyright (C) <YEAR> <AUTHOR(S)>

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
    import { createEmitter } from "src/ts/util/NodeUtil";
    export let id: string;
    export const inputs: NodeInputs = {};
    export const outputs: NodeOutputs = {};
    export let state = {};
    const emit = createEmitter(id, outputs);
</script>
