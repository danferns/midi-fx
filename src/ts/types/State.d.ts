type EditorState = {
    instances: PortableInstances;
    transform?: Transform;
};

type Transform = {
    scale: number;
    translateX: number;
    translateY: number;
};
