# MIDI-FX

MIDI FX is a Free and Open Source MIDI Effects Processor. It uses a node graph architecture to let you build your own effects by freely connecting nodes together.

![Screenshot](/Screenshot.png)

### Things you can do with it

-   Change the note number, velocity, or channel of MIDI messages
-   Generate Control Change (CC) messages using note velocity
-   See the name of the chord you're playing
-   See the value of a CC control as it changes
-   Practice playing chords on your MIDI keyboard
-   Wirelessly send MIDI messages between your devices via WebRTC
-   Convert an Arduino's Serial output to MIDI messages
-   ... and much more!

> This project is in it's early stages. I'm interested in learning how it can evolve, so testing and feedback is very much appreciated.

### MIDI FX at the Audio Developer Conference

I presented MIDI FX at ADCx India 2025! You can find the full talk on [YouTube](https://www.youtube.com/watch?v=jQIquVLGTOA).
It includes a few demos and is a great way to see the capabilities of the project.

## Setup

Simply head to the deployed version at [danferns.github.io/midi-fx](https://danferns.github.io/midi-fx/).

Most Chromium based browsers will work well. Firefox does not support the Serial API and PWA installation for offline use.

### To use MIDI-FX with your DAW

If you're on Windows, you can use [loopMIDI](https://www.tobias-erichsen.de/software/loopmidi.html) to create a _virtual loopback MIDI port_ to send MIDI messages to your DAW. It is also possible to send data from the DAW back to MIDI FX by creating a second port. Make sure to enable the new port in your DAW.

For Linux and MacOS, I believe something like this is available built-in, but I don't have the intructions. If you know how to do it, a PR would be much appreciated!

## How to use

MIDI FX will generally lie _between_ your MIDI input device and your DAW or hardware synth, etc. Start by adding the `External Input` and `External Output` nodes and select your MIDI input device and the virual port for your DAW respectively. Connect the nodes together to check that the MIDI messages pass through transparently. Next, try adding some node between them like the Delay or Transpose, to see how MIDI-FX transforms the messages.

## Contributing

Thank you for your interest in contributing to MIDI-FX! Contributions are very welcome.
There is now a [Contributor's Guidebook](./CONTRIBUTING.md).

You are also welcome to share presets or tips and tricks with the [Community](https://github.com/danferns/midi-fx/discussions/categories/show-and-tell).

## License

Copyright (C) 2022-Present Daniel Fernandes

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
