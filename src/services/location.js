export const getLocation = async (latitude, longitude) => {
    const url = `/api/reverse-geocode?lat=${latitude}&lng=${longitude}`
    return fetch(url).then(res => res.json())
}

export const getCoordinates = async (city) => {
    const url = `/api/forward-geocode?city=${city}`
    return fetch(url).then(res => res.json())
}