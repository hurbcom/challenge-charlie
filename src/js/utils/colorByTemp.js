export const colorByTemp = (temp)=>{
    return temp > 95
    ? 'red-back'
    : temp < 59
    ? 'blue-back'
    : 'yellow-back'
}