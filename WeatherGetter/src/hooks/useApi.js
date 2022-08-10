import axios from 'axios'
import opencage from 'opencage-api-client'


//função para tornar a primeira letra da string maiúscula
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

export function useApi(){

    async function getCityFromCoord(coordenadas){
        const result = await opencage.geocode({q: `${coordenadas.lat},${coordenadas.long}`, key: import.meta.env.VITE_OPEN_CAGE_KEY})
        .then((data)=>{
            return data
        }).catch(error=>{
            console.log(error)
        })

        return result
    }
    async function getCityCoord(cidade){
        const result = await opencage.geocode({q: cidade, key: import.meta.env.VITE_OPEN_CAGE_KEY})
        .then((data)=>{
            const coordenadas = {
                'lat':data.results[0].geometry.lat, 
                'long': data.results[0].geometry.lng
            }
            return coordenadas
        }).catch(error=>{
            console.log(error)
        })

        return result
    }
    async function getWeatherFromCoord(coordenadas){
        return await axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${coordenadas.lat}&lon=${coordenadas.long}&exclude=hourly,minutely&units=metric&lang=pt_br&appid=${import.meta.env.VITE_OPEN_WEATHER_KEY}`
        ).catch(err=>{
            console.log(err)
        })
        .then(
            (response)=>{
                console.log(response);
                return {
                    'hoje':{
                        'tempAtual': Math.round(response.data.current.temp),
                        'max':Math.round(response.data.daily[0].temp.max),
                        'min':Math.round(response.data.daily[0].temp.min),
                        'clima': capitalizeFirstLetter(response.data.current.weather[0].description),
                        'vento': {
                            'velocidade':response.data.current.wind_speed,
                            'deg': response.data.current.wind_deg
                        },
                        'humidade': response.data.current.humidity,
                        'pressao': response.data.current.pressure

                    },
                    'amanha':{
                        'med': Math.round(response.data.daily[1].temp.day),
                        'max':Math.round(response.data.daily[1].temp.max),
                        'min':Math.round(response.data.daily[1].temp.min),
                    },
                    'depAmanha':{
                        'med': Math.round(response.data.daily[2].temp.day),
                        'max':Math.round(response.data.daily[2].temp.max),
                        'min':Math.round(response.data.daily[2].temp.min),
                    }
                }
            }
        ).catch(error=>
            console.log(error)
        )
    }

    async function getWeather(cidade){
        return getCityCoord(cidade).then(result => getWeatherFromCoord(result))
    }

    async function getBackground(){
        return await axios.get('https://bing.biturl.top/?resolution=1920&format=json&index=0&mkt=en-US').then(
            (result) => {
                console.log(result.data.url)
                return result.data.url
            }
        ).catch(
            err=>console.log(err)
        )
        // return await axios.get('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US').then(
        //     (result) => {
        //         console.log(result.data.url)
        //         return result.data.url
        //     }
        // ).catch(
        //     err=>console.log(err)
        // )
    }

    return { getCityFromCoord, getWeatherFromCoord, getWeather, getBackground }
}