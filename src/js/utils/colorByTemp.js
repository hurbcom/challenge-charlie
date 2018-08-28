export const colorByTemp = (temp)=>{
    return temp > 86
    ? 'red-back'
    : temp < 59
    ? 'blue-back'
    : 'yellow-back'
}