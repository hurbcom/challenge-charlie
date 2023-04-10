function getColor(number: number) {
    if (number < 59) {
        return 'blue';
    } else if (number > 95) {
        return 'red';
    } else {
        return 'yellow';
    }
}

export default getColor