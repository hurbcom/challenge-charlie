export function getBgColor(temp) {
    if(temp < 15) {
        return '#3133cc'
    } else if( temp > 35 ) {
        return '#960000'
    }
    return '#cccc28'
}
