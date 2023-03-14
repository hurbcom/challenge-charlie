export const capitalizeFirstChar = str => str.charAt(0).toUpperCase() + str.slice(1)

export const getDirections = angle => {
    const directions = [
        'N', 'NE', 'L', 'SE', 'S', 'SO', 'O', 'NO'
    ]
    const index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % directions.length
    return directions[index]
}