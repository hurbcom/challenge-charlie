export const POSITIONS_TO_OPACITIES: Record<number, string> = {
    0: "--max-bg-opacity",
    1: "--medium-bg-opacity",
    2: "--min-bg-opacity",
};

export const SIZE = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
};

export const DEVICES = {
    mobileS: `(min-width: ${SIZE.mobileS})`,
    mobileM: `(min-width: ${SIZE.mobileM})`,
    mobileL: `(min-width: ${SIZE.mobileL})`,
    tablet: `(min-width: ${SIZE.tablet})`,
    laptop: `(min-width: ${SIZE.laptop})`,
    laptopL: `(min-width: ${SIZE.laptopL})`,
    desktop: `(min-width: ${SIZE.desktop})`,
    desktopL: `(min-width: ${SIZE.desktop})`,
};
