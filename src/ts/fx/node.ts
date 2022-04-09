export default abstract class Node {
    name: string;

    params: Map<string, Parameter> = new Map();
    inputs = new Map<string, NodeInput>();
    outputs = new Map<string, NodeOutput>();

    constructor() {
        this.onMount();
    }

    protected abstract onMount();

    protected addParam(name: string, param: Parameter) {
        this.params.set(name, param);
    }

    connect(outputName: string, input: NodeInput) {
        this.outputs.get(outputName).add(input);
    }

    emit(output, status, data1, data2) {
        const connectedInputs = this.outputs.get(output).values();
        for (const input of connectedInputs) {
            input(status, data1, data2);
        }
    }
}
