module.exports = {
    temperature: (number) => {
        if (number === null) {
            return 'gray'
        } else if (number > 35) {
            return 'red'
        } else if (number < 15) {
            return 'blue'
        } else {
            return 'yellow'
        }
    }
}