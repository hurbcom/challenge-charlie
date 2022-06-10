const getIconRef = name => {
    const icons = {
        'Thunderstorm': '0',
        'Drizzle': 'Q',
        'Rain': 'R',
        'Snow': 'W',
        'Atmosphere': 'F',
        'Clear': 'B',
        'Clouds': 'Y',
        'N/A': ')',
        'Compass': '('
    }

    return icons[name] || icons['N/A']
}


export {
    getIconRef
}