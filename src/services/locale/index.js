
import axios from "axios"

const openCageAPI = `https://api.opencagedata.com/geocode/v1/json?key=${process.env.OPEN_CAGE_API_KEY}`

const fetchLocaleByCoord = async (latitude, longitude) => {
    if (latitude && longitude) {
        const url = `${openCageAPI}&q=${latitude}+${longitude}`
        const { data } = await axios.get(url)
        const [result] = data?.results

        if (result?.components) {
            const { city, state, city_district } = result.components
            /**
             * In some cases opencage api doesn't have a 'city' propertie because 
             * is a district 
             */
            const formatedCity =
                city ?
                    `${city},`
                    : city_district ?
                        `${city_district},`
                        : ''

            const formatedState = state || ''
            const localeToSet = `${formatedCity} ${formatedState}`
            return localeToSet.trimStart().trimEnd()
        }
    }

}

const fetchCoordByLocale = async locale => {
    if (locale !== '') {
        const localeEncoded = encodeURIComponent(locale)
        try {
            const url = `${openCageAPI}&q=${localeEncoded}`
            const { data } = await axios.get(url)
            if (data) {
                const { results } = data
                const { lat, lng: lon } = results[0].geometry

                return { lat, lon }

            }

        } catch (error) {
            throw Error('Locale not found')
        }

    }
}

export {
    fetchLocaleByCoord,
    fetchCoordByLocale
}