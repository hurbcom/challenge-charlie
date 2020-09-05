export const getCelciusColor = (celcius) => {
    let color = ''

    switch (true) {
        case celcius < 15:
            color = '#0000FF'
            break
        case celcius > 35:
            color = '#FF0000'
            break
        default:
            color = '#FFFF00'
            break
    }

    return color
}