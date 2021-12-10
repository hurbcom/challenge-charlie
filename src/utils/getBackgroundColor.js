const checkGradientColor = (number) => {
    const allBlue = number.filter(color => color <= 15);
    const allRed = number.filter(color => color >= 35);
    const allYellow = number.filter(color => color > 15 && color < 35);

    if (allYellow.length === 3) return ['rgba(247, 225, 20, 0.7)', 'rgba(199, 180, 8, 0.7)', 'rgba(156, 140, 3, 0.7)'];
    if (allBlue.length === 3) return ['rgba(0, 132, 247, 0.7)', 'rgba(0, 106, 199, 0.7)', 'rgba(0, 82, 153, 0.7)'];
    if (allRed.length === 3) return ['rgba(235, 63, 63, 0.7)', 'rgba(209, 33, 33, 0.7)', 'rgba(161, 18, 18, 0.7)'];

    return false;
};

const checkColors = (number) => {
    if (number >= 35) {
        return 'rgba(235, 63, 63, 0.7)'
    } else if (number <= 15) {
        return 'rgba(0, 132, 247, 0.7)'
    } else {
        return 'rgba(247, 225, 20, 0.7)'
    }
};

const convertFtoC = (number) => number.map(item => parseInt(item - 32) * 5 / 9);

export const getBackgroundColor = (unit, number) => {

    if (!unit || !number) return 'rgba(82, 82, 82, 0.7)';

    const gradientColors = unit === 'imperial' ? checkGradientColor(convertFtoC(number)) : checkGradientColor(number);

    if (gradientColors) {
        return gradientColors;
    } else {
        return number.map(color => checkColors(color))
    }
};