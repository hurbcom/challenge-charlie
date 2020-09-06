const url = `http://api.opencagedata.com/geocode/v1/json?key=${process.env.OPENCAGE_APIKEY}&language=pt-BR`

export const getReadableAddress = async (latitude, longitude) => {

    const response = await fetch(`${url}&q=${latitude},${longitude}`)
    const data = await response.json()

    const {city, state_code} = data.results[0].components

    return `${city}, ${state_code}`
}