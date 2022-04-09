type Parameter = DropDownParameter | SliderParameter

type DropDownParameter = {
    type: "dropdown";
    options: Array<string>;
    onSelect: (string) => void;
};

type SliderParameter = {
    type: "slider";
    min: number;
    max: number;
    value: number;
};
