import axios from 'axios'
import opencage from 'opencage-api-client'

export function useApi(){

    async function getCityData(cidade){
        const result = await opencage.geocode({q: cidade, key: import.meta.env.VITE_OPEN_CAGE_KEY})
        .then((data)=>{
            const coordenadas = {
                'lat':data.results[0].geometry.lat, 
                'long': data.results[0].geometry.lng
            }
            //console.log(coordenadas)
            return coordenadas
        }).catch(error=>{
            console.log(error)
        })

        return result
    }
    async function getWeatherData(coordenadas){
        // const coordenadas = getCidade(cidade)
        // console.log(coordenadas)

        return await axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${coordenadas.lat}&lon=${coordenadas.long}&exclude=hourly,minutely&units=metric&appid=${import.meta.env.VITE_OPEN_WEATHER_KEY}`
        )
        .then(
            (response)=>{
                //console.log(response);
                return {
                    'hoje':{
                        'tempAtual': response.data.current.temp,
                        'max':response.data.daily[0].temp.max,
                        'min':response.data.daily[0].temp.max,
                    },
                    'amanha':{
                        'med': response.data.daily[1].temp.day,
                        'max':response.data.daily[1].temp.max,
                        'min':response.data.daily[1].temp.min,
                    },
                    'depAmanha':{
                        'med': response.data.daily[2].temp.day,
                        'max':response.data.daily[2].temp.max,
                        'min':response.data.daily[2].temp.min,
                    }
                }
            }
        ).catch(error=>
            console.log(error)
        )
    }

    async function getWeather(cidade){
        return getCityData(cidade).then(result => getWeatherData(result)).catch(err=>console.log(err))
    }

    return { getWeather }
}