type NodeComponent = ComponentType<
    SvelteComponentTyped<{
        id: string;
        inputs: NodeInputs;
        outputs: NodeOutputs;
        state: { [key: string]: unknown } | undefined;
    }>
>;

type Instances = {
    [key: string]: {
        type: string;
        component: NodeComponent;
        inputs: { [key: string]: GUIInput };
        outputs: { [key: string]: GUIOutput };
        x: number;
        y: number;
        state: { [key: string]: unknown } | undefined;
    };
};

type PortableInstances = {
    [key: string]: {
        type: string;
        position: [number, number];
        connections: {
            [key: string]: Connection[];
        };
        state: { [key: string]: unknown };
    };
};
