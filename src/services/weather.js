export const getWeather = (city, latitude, longitude) => {
    // const url = `/api/weather?location_name=${city}&lat=${latitude}&lon=${longitude}`
    const url = `/api/weather?location_name=${city}`
    console.log('url:', url)
    return fetch(url).then(res => res.json())
}