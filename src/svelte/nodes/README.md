## How to create a node

The [template.svelte](./template.svelte) file may be used as a starting point for creating new nodes.
I encourage you to explore some existing nodes to see how things work, but I will highlight the important bits here.

#### `inputs`

This is an object of input functions. The keys of the input functions will be displayed in the UI,
which may be necessary to distinguish multiple inputs.
When there's only one input, the generic key name used is `MIDI`.

#### `outputs`

This object defines the outputs that a node has. Like `inputs`, the keys will be displayed in the UI
and the generic name is `MIDI`. The `new Set()` created as the value will be used internally by MIDI-FX
to keep track of which inputs are connected to this output.

For an example on using multiple outputs, check out [node-splitter](./filter/note-splitter.svelte).

#### `state`

Everything in this object is stored in `localStorage` and exported in preset files. Use this for persistent
data like parameters and settings. Data that you don't want to preserve between sessions should not be placed here.

#### `emit()`

This function is used to send MIDI messages to any of the `outputs` you defined.
The first argument is the key / name of the output, and the next three arguments are the MIDI message bytes.

### Adding a node to the project

#### Choosing a category

The nodes in MIDI-FX are grouped into these categories:

-   _IO_: Nodes that can pass MIDI messages between MIDI-FX and the outside world.
-   _Filter_: Nodes that either allow or block a MIDI message to pass through based on some conditions, but do not alter the messages in any way.
-   _Transform_: Nodes that alter the input in some way. Includes generating new MIDI messages that may or may not be based on the input.
-   _Analyze_: Nodes that do not alter the MIDI messages in any way, but can extract information from them to be displayed to the user.
-   _Interactive_: Nodes that behave like standalone apps. They have some element of interactivity, and may or may not be able to send MIDI messages.

When creating a new node, you will have to pick the most appropriate category for it.
Hopefully, this will be a straightforward choice. If you feel like a node fits in more than one group,
consider breaking its functionality into smaller nodes. Keeping nodes simple and atomic offers better combinatorics!

If however, you believe that your node would better fit a category that doesn't exist yet, please open an issue to discuss it.

#### Choosing a name

There are two names for every node. One is the name of the file, and the other is a display name that will be shown in the UI.
The file name should be in `kebab-case` and it should be unique throughout all categories. The display name should be in `Title Case`.

#### Updating the node list

After saving the file for your new node in the appropriate category, you will have to specify it in the [nodes.ts](../../ts/nodes/nodes.ts) file.
This file is used to generate the list of nodes that are available in the UI.

Now, MIDI-FX should display your new node in the menu. You can now start using it in your patches!
