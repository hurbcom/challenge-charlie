export const convertCtoF = (temp,deg)=>{
    return deg 
    ? (Math.round( (temp - 32)*5/9 * 10 ) / 10)
    : (Math.round( ((temp*9/5) - 32) * 10 ) / 10)
}