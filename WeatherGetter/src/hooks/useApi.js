import axios from 'axios'
import opencage from 'opencage-api-client'


//função para tornar a primeira letra da string maiúscula
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

export function useApi(){
    //Função que realiza chamada na api com uma string de local e retorna as sugestões de locais no formato cidade, estado, país
    async function getCitySugestion(cidade){
        const result = await opencage.geocode({q: cidade, key: import.meta.env.VITE_OPEN_CAGE_KEY})
        .then((data)=>{
            console.log('Results: ', data.results)
            const results = data.results.map((result)=>{
                //se os valores de cidade, estado ou país não estão definidos no resultado, estes são omitidos
                return `${result.components.city?result.components.city + ", ":""}${result.components.state?result.components.state + ", ":""}${result.components.country?result.components.country:""}`
            })
            return results
        }).catch(error=>{
            console.log(error)
            return "error"
        })

        return result
    }
    //Realiza call na api opencage e retorna a coordenada de um lugar identificado por string
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
    //Realiza chamada na api openweather com cordenadas e retorna dados de tempo de acordo com formato definido na aplicação. 
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
                    //Formato da informação comforme usada no app. Atenção ao arredondamento e capitalização.
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
                        'pressao': response.data.current.pressure,
                        'icone': response.data.current.weather[0].icon

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

    //Realiza chamada sequencial da obtenção de coordenadas e obtenção de dados do tempo.
    async function getWeather(cidade){
        return getCityCoord(cidade).then(result => getWeatherFromCoord(result))
    }

    //Obtem o papel de parede do dia da Api do Bing. Foi utilizada API externa que realiza a mesma chamada para 
    //evitar erro com CORS.
    async function getBackground(){
        return await axios.get('https://bing.biturl.top/?resolution=1920&format=json&index=0&mkt=en-US').then(
            (result) => {
                console.log(result.data.url)
                return result.data.url
            }
        ).catch(
            err=>console.log(err)
        )
    }

    return { getCitySugestion, getWeatherFromCoord, getWeather, getBackground }
}