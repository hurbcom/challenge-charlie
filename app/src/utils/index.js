import moment from 'moment'

export const getDay = (day) => {
    if (moment(day).format('DD/MM/YYYY') === moment().format('DD/MM/YYYY')) {
        return 'Today'
    }
    if (moment(day).format('DD/MM/YYYY') === moment().add(1, 'days').format('DD/MM/YYYY')) {
        return 'Tommorrow'
    }
    if (moment(day).format('DD/MM/YYYY') === moment().add(2, 'days').format('DD/MM/YYYY')) {
        return 'After Tommorrow'
    }
}

export const getClassName = (temperature) => {
    if (temperature <= 15) {
        if (temperature >= 5 && temperature <= 14) {
            return 'temperature-cold-light'
        } else if (temperature <= 0) {
            return 'temperature-cold-dark'
        } else if (temperature <= 4 && temperature >= 0) {
            return 'temperature-cold-medium'
        }
    } else if (temperature >= 16 && temperature <= 35) {
        if (temperature >= 16 && temperature <= 20) {
            return 'temperature-medium-light'
        } else if (temperature >= 21 && temperature <= 27) {
            return 'temperature-medium-medium'
        } else if (temperature >= 28 && temperature <= 35) {
            return 'temperature-medium-dark'
        }
    } else {
        if (temperature >= 35 && temperature <= 40) {
            return 'temperature-hot-light'
        } else if (temperature >= 41 && temperature <= 45) {
            return 'temperature-hot-medium'
        } else if (temperature > 46) {
            return 'temperature-hot-dark'
        }
    }
}

export const celciusToFarenheit = (celsius) => {
    return celsius * 9 / 5 + 32
}

export const farenheitToCelcius = (farenheit) => {
    return (farenheit - 32) * 5 / 9
}