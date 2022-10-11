const convertMsToKmh = (value: number | undefined) => {
    if(typeof(value) === "number") {
        return (value*3.6).toFixed(1)
    }
    return "?"
}

export default convertMsToKmh;