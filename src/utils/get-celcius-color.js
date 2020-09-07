export const getCelciusColor = (celcius) => {
    let backgroundColor = 'rgb(255, 255, 200)'

    if (celcius <= 15) {
        backgroundColor = `rgb(200, 200, 255)`
    } else if (celcius >= 35) {
        backgroundColor = `rgb(255, 200, 200)`
    }

    return backgroundColor
}