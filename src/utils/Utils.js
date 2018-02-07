export default class Utils {

	static getTemperature(code) {

	}

	static getClassName(temperature) {
		if(temperature <= 15 ){
                if( temperature >= 5 && temperature <= 14 ){
                    return 'temperature-cold-light'
                }else if( temperature <= 0 ){
                    return 'temperature-cold-dark'
                }else if( temperature <= 4 && temperature >= 0 ){
                    return 'temperature-cold-medium'
                }
            }else if( temperature >= 16 && temperature <= 35 ){
                if( temperature >= 16 && temperature <= 20 ){
                    return 'temperature-medium-light'
                }else if( temperature >= 21 && temperature <= 27 ){
                    return 'temperature-medium-medium'
                }else if( temperature >= 28 && temperature <= 35 ){
                    return 'temperature-medium-dark'
                }
            }else{
                if( temperature >= 35 && temperature <= 40 ){
                    return 'temperature-hot-light'
                }else if( temperature >= 41 && temperature <= 45 ){
                    return 'temperature-hot-medium'
                }else if( temperature > 46 ){
                    return 'temperature-hot-dark'
                }
            }
	}

	static getUrlImage(condition) {
		switch (condition) {
			case 'tornado' :
				return './images/20.svg'
				break
			case 'tropical storm' :
				return './images/20.svg'
				break
			case 'hurricane' :
				return './images/20.svg'
				break
			case 'severe thunderstorms' :
				return './images/20.svg'
				break
			case 'thunderstorms' :
				return './images/20.svg'
				break
			case 'mixed rain and snow' :
				return './images/23.svg'
				break
			case 'mixed rain and sleet' :
				return './images/20.svg'
				break
			case 'mixed snow and sleet' :
				return './images/23.svg'
				break
			case 'freezing drizzle' :
				return './images/23.svg'
				break
			case 'drizzle' :
				return './images/20.svg'
				break
			case 'freezing rain' :
				return './images/20.svg'
				break
			case 'showers' :
				return './images/20.svg'
				break
			case 'showers' :
				return './images/20.svg'
				break
			case 'snow flurries' :
				return './images/23.svg'
				break
			case 'light snow showers' :
				return './images/21.svg'
				break
			case 'blowing snow' :
				return './images/23.svg'
				break
			case 'snow' :
				return './images/21.svg'
				break
			case 'hail' :
				return './images/20.svg'
				break
			case 'sleet' :
				return './images/20.svg'
				break
			case 'dust' :
				return './images/13.svg'
				break
			case 'foggy' :
				return './images/12.svg'
				break
			case 'haze' :
				return './images/12.svg'
				break
			case 'smoky' :
				return './images/13.svg'
				break
			case 'blustery' :
				return './images/20.svg'
				break
			case 'windy' :
				return './images/6.svg'
				break
			case 'cold' :
				return './images/14.svg'
				break
			case 'cloudy' :
				return './images/14.svg'
				break
			case 'mostly cloudy (night)' :
				return './images/41.svg'
				break
			case 'mostly cloudy (day)' :
				return './images/14.svg'
				break
			case 'partly cloudy (night)' :
				return './images/41.svg'
				break
			case 'partly cloudy (day)' :
				return './images/14.svg'
				break
			case 'clear (night)' :
				return './images/2.svg'
				break
			case 'sunny' :
				return './images/2.svg'
				break
			case 'fair (night)' :
				return './images/20.svg'
				break
			case 'fair (day)' :
				return './images/20.svg'
				break
			case 'mixed rain and hail' :
				return './images/20.svg'
				break
			case 'hot' :
				return './images/2.svg'
				break
			case 'isolated thunderstorms' :
				return './images/20.svg'
				break
			case 'scattered thunderstorms' :
				return './images/20.svg'
				break
			case 'scattered thunderstorms' :
				return './images/20.svg'
				break
			case 'scattered showers' :
				return './images/20.svg'
				break
			case 'heavy snow' :
				return './images/23.svg'
				break
			case 'scattered snow showers' :
				return './images/20.svg'
				break
			case 'heavy snow' :
				return './images/23.svg'
				break
			case 'partly cloudy' :
				return './images/5.svg'
				break
			case 'thundershowers' :
				return './images/20.svg'
				break
			case 'snow showers' :
				return './images/23.svg'
				break
			case 'isolated thundershowers' :
				return './images/20.svg'
				break
			default: return './images/14.svg'
		}
	}

	static getCondition(condition) {
		switch (condition) {
			case 'tornado' :
				return 'tornado'
				break
			case 'tropical storm' :
				return 'tempestade tropical'
				break
			case 'hurricane' :
				return 'furacão'
				break
			case 'severe thunderstorms' :
				return 'tempestades severas'
				break
			case 'thunderstorms' :
				return 'trovoadas'
				break
			case 'mixed rain and snow' :
				return 'chuva mista e neve'
				break
			case 'mixed rain and sleet' :
				return 'chuva mista e aguaceiro'
				break
			case 'mixed snow and sleet' :
				return 'neve misturada e granizo'
				break
			case 'freezing drizzle' :
				return 'chuvisco gelado'
				break
			case 'drizzle' :
				return 'chuvisco'
				break
			case 'freezing rain' :
				return 'chuva gelada'
				break
			case 'showers' :
				return 'aguaceiro'
				break
			case 'showers' :
				return 'aguaceiro'
				break
			case 'snow flurries' :
				return 'flocos de neve'
				break
			case 'light snow showers' :
				return 'nevascas leves'
				break
			case 'blowing snow' :
				return 'soprando neve'
				break
			case 'snow' :
				return 'neve'
				break
			case 'hail' :
				return 'granizo'
				break
			case 'sleet' :
				return 'chuva com neve'
				break
			case 'dust' :
				return 'poeira'
				break
			case 'foggy' :
				return 'nebuloso'
				break
			case 'haze' :
				return 'neblina'
				break
			case 'smoky' :
				return 'esfumaçado'
				break
			case 'blustery' :
				return 'tempestuoso'
				break
			case 'windy' :
				return 'ventoso'
				break
			case 'cold' :
				return 'frio'
				break
			case 'cloudy' :
				return 'nublado'
				break
			case 'mostly cloudy (night)' :
				return 'predominantemente nublado'
				break
			case 'mostly cloudy (day)' :
				return 'predominantemente nublado'
				break
			case 'partly cloudy (night)' :
				return 'parcialmente nublado'
				break
			case 'partly cloudy (day)' :
				return 'parcialmente nublado'
				break
			case 'clear (night)' :
				return 'claro'
				break
			case 'sunny' :
				return 'ensolarado'
				break
			case 'fair (night)' :
				return 'claro'
				break
			case 'fair (day)' :
				return 'claro'
				break
			case 'mixed rain and hail' :
				return 'chuva mista e granizo'
				break
			case 'hot' :
				return 'calor'
				break
			case 'isolated thunderstorms' :
				return 'tempestades isoladas'
				break
			case 'scattered thunderstorms' :
				return 'tempestades dispersas'
				break
			case 'scattered thunderstorms' :
				return 'tempestades dispersas'
				break
			case 'scattered showers' :
				return 'chuvas dispersas'
				break
			case 'heavy snow' :
				return 'neve pesada'
				break
			case 'scattered snow showers' :
				return 'nevadas dispersas'
				break
			case 'heavy snow' :
				return 'neve pesada'
				break
			case 'partly cloudy' :
				return 'parcialmente nublado'
				break
			case 'thundershowers' :
				return 'trovoadas'
				break
			case 'snow showers' :
				return 'chuvas de neve'
				break
			case 'isolated thundershowers' :
				return 'trovoadas isoladas'
				break
			default: return 'claro'
		}
	}
}