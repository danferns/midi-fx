import { Input, Message, WebMidi } from "webmidi";
import Node from "./node";

export default class MIDIInput extends Node {
    name = "Input Device";

    #inputDevice: Input;

    onMount() {
        WebMidi.addOneTimeListener("enabled", () => {
            this.#init();
        });

        this.addParam("device", {
            type: "dropdown",
            options: [],
            onSelect: (string: string) => {
                this.#changeInput(string);
            },
        });

        this.outputs.set("MIDI", new Set());
    }

    #init() {
        const inputs = WebMidi.inputs;
        const inputNames = [];
        for (const input of inputs) {
            inputNames.push(input.name);
        }
        (this.params.get("device") as DropDownParameter).options = inputNames;
    }

    #changeInput(name) {
        this.#inputDevice?.removeListener("midimessage", this.#inputListener.bind(this));
        this.#inputDevice = WebMidi.getInputByName(name);
        this.#inputDevice.addListener("midimessage", this.#inputListener.bind(this));
    }

    #inputListener(event) {
        const message = event.message as Message;
        const status = message.data[0];
        const data1 = message.rawDataBytes[0];
        const data2 = message.rawDataBytes[1];
        this.emit("MIDI", status, data1, data2);
    }
}
