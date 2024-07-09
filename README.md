# MIDI-FX

MIDI FX is a Free and Open Source MIDI Effects Processor. It uses a node graph architecture to let you build your own effects by freely connecting nodes together. 

![Screenshot](/Screenshot.png)

### Things you can do with it

- Change the note number, velocity, or channel of MIDI messages
- Convert Note Velocities into Continuous Change (MIDI CC) messages
- See the name of the chord you're playing
- See the value of a CC control as it changes
- Practice playing chords on your MIDI keyboard
- Wirelessly send MIDI messages between your devices via WebRTC
- Convert an Arduino's Serial output to MIDI messages
- ... and much more!

> This project is in it's early stages. I'm interested in learning how it can evolve, so testing and feedback is very much appreciated. 

## Setup

Simply head to the deployed version at [danferns.github.io/midi-fx](https://danferns.github.io/midi-fx/).

Most Chromium based browsers will work well. Firefox does not support the Serial API and PWA installation for offline use.

### To use MIDI-FX with your DAW

You will need to set up a virtual loopback device to forward the messages from MIDI-FX to your DAW and vice-versa. On Windows, you can accomplish this with [loopMIDI](https://www.tobias-erichsen.de/software/loopmidi.html).

Create a port in loopMIDI. In your DAW, make sure to enable this port.

## How to use

MIDI FX will generally lie *between* your MIDI input device and your DAW or hardware synth, etc. Start by adding the `External Input` and `External Output` nodes. Connect them together to check that the MIDI messages pass through transparently. Next, try adding some node between them like the Delay or Transpose, to see how MIDI-FX transforms the messages.

## Contributing

Thank you for your interest in contributing to MIDI-FX! Contributions are very welcome. Here are some ways you can do it:

- Share MIDI FX presets or tips and tricks with the [Community](https://github.com/danferns/midi-fx/discussions/categories/show-and-tell).
- Provide feedback, feature requests or bug reports in the GitHub Issues
- Create a PR when there is a clear solution to the Issue

## License

Copyright (C) 2022-2024 Daniel Fernandes

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
