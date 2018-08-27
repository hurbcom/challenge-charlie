const translateTemp = (temp, unit) => {
    switch (true) {
        case toCelsius(temp, unit) < 16:
            return 'cold';

        case toCelsius(temp, unit) < 36:
            return 'tropical';

        case toCelsius(temp, unit) > 35:
            return 'hot';

        default:
            return;
    }
};

function toCelsius(temp, unit) {
    if (unit === 'c') {
        return temp;
    } else if (unit === 'f') {
        return (5 / 9) * (temp - 32);
    }

    return;
}

export default translateTemp;
