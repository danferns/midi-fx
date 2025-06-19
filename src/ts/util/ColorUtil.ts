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

import { colord } from "colord";
import type { Colord } from "colord/colord";

export const channelColors: Colord[] = [];

for (let i = 0; i < 16; i++) {
    const hue = ((i + 8) * 360) / 16;
    const sat = 50 + (25 * (i % 4)) / 4;
    const lum = 75 - (25 * (i % 4)) / 4;
    const color = colord({
        h: hue,
        s: sat,
        l: lum,
    });
    channelColors.push(color);
}
