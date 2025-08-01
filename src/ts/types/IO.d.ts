/*
 * Copyright (C) 2022 Daniel Fernandes
 *
 * This file is part of MIDI-FX.
 *
 * MIDI-FX is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * MIDI-FX is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with MIDI-FX. If not, see <https://www.gnu.org/licenses/>.
 */

type NodeInput = (status: number, data1: number, data2: number) => unknown;

type NodeOutput = Set<NodeInput>;

type NodeInputs = { [key: string]: NodeInput };

type NodeOutputs = { [key: string]: NodeOutput };

type LiveIO = {
    x: number;
    y: number;
};

type LiveInput = LiveIO & {
    node: NodeInput;
};

type LiveOutput = LiveIO & {
    node: NodeOutput;
    connections: Set<Connection>;
    active: boolean | undefined;
};

type Connection = [string, string];
