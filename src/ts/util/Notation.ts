const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

export function noteNumToNameOctave(note: number) {
    return rootNoteNumToName(note) + Math.floor(note / 12);
}

export function rootNoteNumToName(note: number) {
    return notes[note % 12];
}
