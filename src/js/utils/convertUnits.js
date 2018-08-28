export const convertUnits = (value,unit) => {
    switch(unit){
        case 'in':
            return Math.floor(value*10/1013.25)/10;
        case 'mph':
            return Math.floor(value*1.6*10)/10;
        default:
        return 'error'
    }
}