var directions = [
    "Norte",
    "Nordeste",
    "Leste",
    "Sudeste",
    "Sul",
    "Sudoeste",
    "Oeste",
    "Nordeste"
];

export const getDirection = heading => {
    const index = Math.round(heading / 8 / 5, 625);
    return directions[index] || "--";
};

export const getColor = temperature => {};
