export default {
    "chord-explorer": `Displays which chords are being played at its input. It recognizes chords based on patterns defined in its built-in dictionary.`,
    delay: `Forwards all MIDI messages after a specified duration in milliseconds.`,
    filter: `Allows only selected types of messages to pass through.`,
    "midi-input": `Receives MIDI messages from an external MIDI device.`,
    "midi-output": `Sends MIDI messages to an external MIDI device.`,
    "note-splitter": `Splits "note on" and "note off" events into separate outputs. Other MIDI messages do not pass through this node.`,
    scale: `Scales the velocity of note on / off MIDI messages.`,
    "serial-controller": `Receives an integer (0-127) from a serial device and forwards that as a Control Change message on Channel 0.`,
    transpose: `Transposes note on / off events by the given semitones.`,
    "typing-keyboard": `Turns your typing keyboard into a MIDI input device. You can choose between multiple key mappings.
    
    Double-click on "Typing Keyboard" to view the active mapping file.`,
};
