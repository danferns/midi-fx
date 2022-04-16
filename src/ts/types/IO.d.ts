type NodeInput = (status: number, data1: number, data2: number) => unknown;

type NodeOutput = Set<NodeInput>;

type NodeInputs = { [key: string]: NodeInput };

type NodeOutputs = { [key: string]: NodeOutput };

type GUIInput = {
    node: NodeInput;
    x: number;
    y: number;
};

type GUIOutput = {
    node: NodeOutput;
    x: number;
    y: number;
    connections: Set<>;
    active: boolean | undefined;
};
