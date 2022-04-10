type NodeInput = (status: number, data1: number, data2: number) => unknown;

type NodeOutput = Set<NodeInput>;

type GUIInput = {
    node: NodeInput,
    x: number,
    y: number,
}

type GUIOutput = {
    node: NodeOutput,
    x: number,
    y: number,
    connections: [],
    active: boolean | undefined
}