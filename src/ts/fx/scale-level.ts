import Node from "./node";

export default class ScaleLevel extends Node {
    onMount() {
        this.addParam("Level", {
            type: "slider",
            min: 0,
            max: 1,
            value: 1,
        });

        this.outputs.set("MIDI", new Set());
    }

    receive(status, data1, data2) {
        const level = (this.params.get("Level") as SliderParameter).value;
        if (status >= 128 && status <= 159) {
            this.emit("MIDI", status, data1, data2 * level);
            return;
        }
        // allow other data to pass through transparently
        this.emit("MIDI", status, data1, data2);
    }
}
