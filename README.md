# MIDI-FX

MIDI-FX is a powerful tool for transforming and analyzing MIDI messages in creative ways. Its node graph architecture offers a high degree of flexibility, making it a valuable tool for enhancing musical performances.

![Screenshot](/Screenshot.png)

### Highlights

-   Installable Web App (cross-platform + offline support)
-   Transform MIDI (e.g. transpose, delay notes, convert velocity to CC)
-   Analyze MIDI (e.g. visualize CC changes, identify chords)
-   Web Serial API support (so you can receive MIDI from an Arduino)

## How to use

Simply head to the deployed version at [danferns.github.io/midi-fx](https://danferns.github.io/midi-fx/).

Most Chromium based browsers will work well. Firefox does not support the Serial API and PWA installation for offline use.

### To use MIDI-FX with your DAW

You will need to set up a virtual loopback device to forward the messages from MIDI-FX to your DAW and vice-versa. On Windows, you can accomplish this with [loopMIDI](https://www.tobias-erichsen.de/software/loopmidi.html).

## How it works

All nodes are implemented as their own Svelte components. This means that nodes can also access native Web APIs and customize their UI as needed.

Nodes can have multiple inputs and outputs. Each input is actually a function that is called for every MIDI message sent to it. Here's an input that simply logs the messages it receives:

```ts
(status: number, data1: number, data2: number) => {
    console.log(`Status: ${status} Data 1: ${data1} Data 2: ${data2}`);
};
```

An output is a `Set` of inputs (the functions). When an input is connected to an output, it is added to the `Set` that the output represents.

Under the hood, when a message is emitted through an output, all the inputs (the functions) in its `Set` are called, with the outgoing message bytes as their arguments.

## Contributing

Thank you for your interest in contributing to MIDI-FX! To make development a better experience for all of us, this project is undergoing a major refactor, due to which I'm currently not accepting contributions. Please check back in a few weeks for any updates!

## License

Copyright (C) 2022 Daniel Fernandes

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
