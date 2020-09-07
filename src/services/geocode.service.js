const url = `//api.opencagedata.com/geocode/v1/json?key=${process.env.OPENCAGE_APIKEY}&language=pt-BR`

export const getReadableAddress = async (latitude, longitude) => {
    const response = await fetch(`${url}&q=${latitude},${longitude}`)
    const data = await response.json()

    return data.results[0].components.suburb
}

export const getLattudeAndLongitude = async (address) => {
    const response = await fetch(`${url}&q=${address}`)
    const data = await response.json()
    
    if (!data.results.length) {
        throw new Error('Não foi possível encontrar Clima para o local informado!')
    }

    const { lat, lng } = data.results[0].geometry

    return {
        latitude: lat,
        longitude: lng
    }
}