# MIDI-FX

MIDI-FX lets you transform and analyze MIDI messages in creative ways. It uses a node graph architecture where each node can receive MIDI messages, process them, and emit transformed MIDI messages for other nodes to receive. 

![Screenshot](/Screenshot.png)

### Highlights

- Runs cross platform in the browser, and is installable for offline use as a Progressive Web App.
- Transformation: transpose or delay notes, convert note velocity into a MIDI CC message, and more.
- Analysis: visualize MIDI CC changes, learn the name of the chord you're playing, etc. 
- Supports the Web Serial API (so you can receive MIDI from an Arduino).

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
}
```

An output is a `Set` of inputs (the functions). When an input is connected to an output, it is added to the `Set` that the output represents. 

Under the hood, when a message is emitted through an output, all the inputs (the functions) in its `Set` are called, with the outgoing message bytes as their arguments.

## License

Copyright (C) 2022 Daniel Fernandes

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.