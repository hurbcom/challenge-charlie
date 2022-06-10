const capitalize = string => {
    return string.replace(/\b\w/g, c => c.toUpperCase())
}


export {
    capitalize
}