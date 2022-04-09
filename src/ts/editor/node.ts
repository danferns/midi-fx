export default class Node {
    name: string;
    
    params: Map<string, Parameter> = new Map();
    inputs = new Map<string, NodeInput>();
    outputs = new Map<string, NodeOutput>();

    
}
