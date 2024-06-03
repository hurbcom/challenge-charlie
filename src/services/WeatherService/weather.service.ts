export async function getWeather(location: string) {
    try {
        const res = await fetch(`/api/weather?location=${location}`)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

