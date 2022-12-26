# MIDI-FX

MIDI-FX lets you transform and analyze MIDI messages in creative ways. It uses a node graph architecture where each node can receive MIDI messages from other nodes, process them, and send transformed MIDI messages to other nodes. 

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

This project is licensed under the [GPL-3.0 license](https://github.com/danferns/midi-fx/blob/main/LICENSE).
