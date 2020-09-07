export const getCelciusColor = (celcius) => {
    let color = 'rgb(255, 255, 0)'

    if (celcius <= 15) {
        color = 'rgb(0, 0, 255)'
    } else if (celcius >= 35) {
        color = 'rgb(255, 0, 0)'
    }

    return color
}