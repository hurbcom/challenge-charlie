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
			case 'Tornado' :
				return './images/20.svg'
				break
			case 'Tropical storm' :
				return './images/20.svg'
				break
			case 'Hurricane' :
				return './images/20.svg'
				break
			case 'Severe thunderstorms' :
				return './images/20.svg'
				break
			case 'Thunderstorms' :
				return './images/20.svg'
				break
			case 'Mixed rain and snow' :
				return './images/23.svg'
				break
			case 'Mixed rain and sleet' :
				return './images/20.svg'
				break
			case 'Mixed snow and sleet' :
				return './images/23.svg'
				break
			case 'Freezing drizzle' :
				return './images/23.svg'
				break
			case 'Drizzle' :
				return './images/20.svg'
				break
			case 'Freezing rain' :
				return './images/20.svg'
				break
			case 'Showers' :
				return './images/20.svg'
				break
			case 'Showers' :
				return './images/20.svg'
				break
			case 'Snow flurries' :
				return './images/23.svg'
				break
			case 'Light snow showers' :
				return './images/21.svg'
				break
			case 'Blowing snow' :
				return './images/23.svg'
				break
			case 'Snow' :
				return './images/21.svg'
				break
			case 'Hail' :
				return './images/20.svg'
				break
			case 'Sleet' :
				return './images/20.svg'
				break
			case 'Dust' :
				return './images/13.svg'
				break
			case 'Foggy' :
				return './images/12.svg'
				break
			case 'Haze' :
				return './images/12.svg'
				break
			case 'Smoky' :
				return './images/13.svg'
				break
			case 'Blustery' :
				return './images/20.svg'
				break
			case 'Windy' :
				return './images/19.svg'
				break
			case 'Cold' :
				return './images/14.svg'
				break
			case 'Cloudy' :
				return './images/14.svg'
				break
			case 'Mostly cloudy (night)' :
				return './images/41.svg'
				break
			case 'Mostly cloudy (day)' :
				return './images/14.svg'
				break
			case 'Partly cloudy (night)' :
				return './images/41.svg'
				break
			case 'Partly cloudy (day)' :
				return './images/14.svg'
				break
			case 'Clear (night)' :
				return './images/19.svg'
				break
			case 'Sunny' :
				return './images/2.svg'
				break
			case 'Fair (night)' :
				return './images/20.svg'
				break
			case 'Fair (day)' :
				return './images/20.svg'
				break
			case 'Mixed rain and hail' :
				return './images/20.svg'
				break
			case 'Hot' :
				return './images/2.svg'
				break
			case 'Isolated thunderstorms' :
				return './images/20.svg'
				break
			case 'Scattered thunderstorms' :
				return './images/20.svg'
				break
			case 'Scattered thunderstorms' :
				return './images/20.svg'
				break
			case 'Scattered showers' :
				return './images/20.svg'
				break
			case 'Heavy snow' :
				return './images/23.svg'
				break
			case 'Scattered snow showers' :
				return './images/20.svg'
				break
			case 'Heavy snow' :
				return './images/23.svg'
				break
			case 'Partly cloudy' :
				return './images/5.svg'
				break
			case 'Thundershowers' :
				return './images/20.svg'
				break
			case 'Snow showers' :
				return './images/23.svg'
				break
			case 'Isolated thundershowers' :
				return './images/20.svg'
				break
			default: return './images/14.svg'
		}
	}
}