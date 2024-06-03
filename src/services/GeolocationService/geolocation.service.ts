export async function getLocation(location: string | { latitude: number; longitude: number }) {
    try {
        if (typeof location === 'string') {
            const res = await fetch(`/api/geolocation?&location=${location}`)
            const data = await res.json()
            return data
        }

        if (typeof location === 'object') {
            const res = await fetch(`/api/geolocation?&location=${location.latitude}+${location.longitude}`)
            const data = await res.json()
            return data
        }
    } catch (error) {
        console.log(error)
    }
  }