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
