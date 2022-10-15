import axios from 'axios';

interface ResponseProps {
    components: Record<string, string>
    geometry: {
        lat: number
        lng: number
    }
}

export interface OptionsTownProps {
    loaded: boolean
    towns?: ItemProps[]
    error?: {
        message: string
    }
}

interface ItemProps {
    direction: string
    latitude: number
    longitude: number
}

const getOptionsTown = async(town: string) => {
    const formattedTown = (response: ResponseProps, town: string) => {
        if(String(response.components.quarter).toLocaleLowerCase().startsWith(town.toLocaleLowerCase())) {
            return {
                direction: `${response.components.quarter}, ${response.components.city}, ${response.components.country}`,
                latitude: response.geometry.lat,
                longitude: response.geometry.lng,
            }
        }
    
        if(String(response.components.town).toLocaleLowerCase().startsWith(town.toLocaleLowerCase()) || String(response.components.city).toLocaleLowerCase().startsWith(town.toLocaleLowerCase())) {
            return {
                direction: `${(response.components.town || response.components.city)}, ${response.components.state}, ${response.components.country}`,
                latitude: response.geometry.lat,
                longitude: response.geometry.lng,
            }
        }
    
        if(String(response.components.village).toLocaleLowerCase().startsWith(town.toLocaleLowerCase())) {
            return {
                direction: `${response.components.village}, ${(response.components.state || response.components.county)}, ${response.components.country}`,
                latitude: response.geometry.lat,
                longitude: response.geometry.lng,
            }
        }
    }

    const optionsTown: OptionsTownProps = await axios.get(
        "https://api.opencagedata.com/geocode/v1/json", {
            params: {
                q: town,
                key: import.meta.env.VITE_API_KEY_OPEN_CAGE,
                language: navigator.language
            }
        }
    ).then((response) => {
        const towns = (response.data.results).map((item: ResponseProps) => formattedTown(item, town.split(", ")[0]))
        const filterTowns = towns.filter((item: ItemProps) => item!==undefined)
        
        if(filterTowns.length>0) {
            return ({
                loaded: true,
                towns: filterTowns,
            })
        } else {
            return ({
                loaded: false,
            })
        }
    }).catch((error) => {
        return ({
            loaded: false,
            error: {
                message: error.message,
            }
        })
    });
    
    return optionsTown
}

export default getOptionsTown;
