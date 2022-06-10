const capitalize = string => {
    const strToArray = string.split(' ')
    const capitalized = strToArray.map(l => {
        const letterToArray = l.split('')
        const firstLetter = letterToArray.shift()
        letterToArray.unshift(firstLetter.toUpperCase())
        return letterToArray.join('')

    })

    return capitalized.join(' ')
}


export {
    capitalize
}