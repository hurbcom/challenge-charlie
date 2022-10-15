const convertMileshToKmh = (value: number | undefined) => {
    if(typeof(value) === "number") {
        return (value*1.609).toFixed(1)
    }
    return "?"
}

export default convertMileshToKmh;