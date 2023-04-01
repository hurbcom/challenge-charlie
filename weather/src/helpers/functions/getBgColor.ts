const colors = {
    yellow: {
        1: '#E8B710',
        2: '#F0BC11',
        3: '#C99E0E'
    },
    red: {
        1: '#E32E24',
        2: '#F03026',
        3: '#C92920'
    },
    blue: {
        1: '#6FBAF7',
        2: '#6CB4F0',
        3: '#5B98C9'
    }
}

const getColor = (temp: number) => {
    const color =  temp > 35 ? colors.red : temp < 15 ? colors.blue : colors.yellow;
    
    return color
}

export const getBgColor = (firstDayTemp: number, secondDayTemp: number, thirdDayTemp: number) => {
    const firstDayColor = getColor(firstDayTemp);
    const secondDayColor = getColor(secondDayTemp);
    const thirdDayColor = getColor(thirdDayTemp);
    
    return {
        1: firstDayColor[1],
        2: secondDayColor[2],
        3: thirdDayColor[3]
    }
}