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

type NodeComponent = ComponentType<
    SvelteComponentTyped<{
        id: string;
        inputs: NodeInputs;
        outputs: NodeOutputs;
        state: { [key: string]: unknown } | undefined;
    }>
>;

type Instances = {
    [key: string]: {
        type: string;
        component: NodeComponent;
        inputs: { [key: string]: GUIInput };
        outputs: { [key: string]: GUIOutput };
        x: number;
        y: number;
        state: { [key: string]: unknown } | undefined;
    };
};

type PortableInstances = {
    [key: string]: {
        type: string;
        position: [number, number];
        connections: {
            [key: string]: Connection[];
        };
        state: { [key: string]: unknown };
    };
};
