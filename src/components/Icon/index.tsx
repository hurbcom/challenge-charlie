import styled from "styled-components";

export type IconSizeType = "small" | "default" | "large" | "xlarge";

const IconBase = styled.i<{ size: IconSizeType }>`
    color: inherit;
    display: flex;
    justify-items: center;
    align-items: center;
    font-style: normal;
    font-size: ${(props) => IconSizesMap[props.size]};

    &:before {
        line-height: 1;
        font-family: "MeteoconsRegular";
        content: attr(data-icon);
    }
`;

const IconNamesMap = {
    morningSun: "A",
    sunny: "B",
    moon: "C",
    eclipse: "D",
    windNigth: "E",
    wind: "F",
    cog: "G",
    cloudDay: "H",
    i: "I",
    j: "J",
    k: "K",
    l: "L",
    m: "M",
    n: "N",
    o: "O",
    p: "P",
    q: "Q",
    r: "R",
    s: "S",
    t: "T",
    u: "U",
    v: "V",
    w: "W",
    x: "X",
    y: "Y",
    z: "Z",
    "0": "0",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    exclamation: "!",
    apostrofe: '"',
    hastatg: "#",
    dollarSign: "$",
    percent: "%",
    andSignal: "&",
    thermometer: "'",
    compass: "(",
    unavailable: ")",
    celsius: "*",
    fahrenheit: "+",
};

const IconSizesMap = {
    small: "12px",
    default: "16px",
    large: "24px",
    xlarge: "32px",
};

type IconPropsType = {
    name: keyof typeof IconNamesMap;
    size?: IconSizeType;
};

const Icon = ({ name, size = "default" }: IconPropsType) => (
    <IconBase role="figure" data-icon={IconNamesMap[name]} size={size} />
);

export default Icon;
