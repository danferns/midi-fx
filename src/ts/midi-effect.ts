import type { Message } from "webmidi";
import { activeOutput, onInput } from "./midi-io";

onInput(async (event) => {
    const message: Message = event.message;
    if (message.type !== "noteon") return;
    const note = message.dataBytes[0];
    const vel = message.dataBytes[1];
    activeOutput.sendNoteOn(note, {
        attack: vel / 127,
    });
    await wait(1000);
    activeOutput.sendNoteOn(note + 5, {
        attack: vel / (127 * 2),
    });
});

function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
