export const tempColors = {
    hotColors: {
        high: '#ef1c1c',
        medium: '#7e2121',
        low: '#451212',
    },
    niceColors: {
        high: '#f5ee0be6',
        medium: '#dcbe1ae3',
        low: '#b09914e3',
    },
    coldColors: {
        high: '#0bc1eed1',
        medium: '#1583a5d6',
        low: '#13548ce0',
    },
    defaultColors: {
        high: '#596364',
        medium: '#3f4447',
        low: '#303437',
    },
}

export const getTempScale = (temp) => {
    if (temp > 35) return tempColors.hotColors
    if (temp < 15) return tempColors.coldColors
    return tempColors.niceColors
}
