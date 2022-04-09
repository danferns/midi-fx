import { Output, WebMidi } from "webmidi";
import Node from "./node";

export default class MIDIOutput extends Node {
    name = "Output Device";

    #outputDevice: Output;

    onMount() {
        WebMidi.addOneTimeListener("enabled", this.updateList.bind(this));
        WebMidi.addListener("connected", this.updateList.bind(this));
        WebMidi.addListener("disconnected", this.updateList.bind(this));

        this.addParam("device", {
            type: "dropdown",
            options: [],
            onSelect: this.changeOutput.bind(this),
        });
    }

    updateList() {
        const outputs = WebMidi.outputs;
        const outputNames = [];
        for (const output of outputs) {
            outputNames.push(output.name);
        }
        (this.params.get("device") as DropDownParameter).options = outputNames;
    }

    changeOutput(name) {
        this.#outputDevice = WebMidi.getOutputByName(name);
    }

    receive(status: number, data1: number, data2: number) {
        const message = [status];
        if (data1 !== undefined) message.push(data1);
        if (data2 !== undefined) message.push(data2);
        this.#outputDevice.send(message);
    }
}
