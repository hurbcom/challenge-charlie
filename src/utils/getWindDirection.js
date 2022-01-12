export const getWindDirection = (degrees) => {
    if (degrees <= 45) return 'NE'
    if (degrees <= 95) return 'L'
    if (degrees <= 135) return 'SE'
    if (degrees <= 180) return 'S'
    if (degrees <= 225) return 'SO'
    if (degrees <= 270) return 'O'
    if (degrees <= 325) return 'NO'
    if (degrees <= 0 || degrees >= 360) return 'N'
}
