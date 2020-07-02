
const API_URL_BASE = 'http://api.openweathermap.org/data/2.5/';
const WEATHER = 'weather?';
const FORECAST = 'forecast?';
const APP_ID = '&APPID=7ba73e0eb8efe773ed08bfd0627f07b8&lang=pt_br';
const API_OPEN_CAGE = 'https://api.opencagedata.com/geocode/v1/json?q=';
const API_KEY = '&key=c63386b4f77e46de817bdf94f552cddf';

class WeatherForecastService {


    //Obtém informações do tempo do dia atual
    getWeather(locationName, units) {
        return fetch(`${API_URL_BASE}${WEATHER}q=${locationName}&units=${units}${APP_ID}`);
    }

    //Pega nome de uma localidade por latitude a longitude

    getLocationName(lat, lon) {
        return fetch(`${API_OPEN_CAGE}${lat}+${lon}${API_KEY}`);
    }

    //Obtém a previsão dos próximos dias(amanhã e depois de manhã) 
    getNextForecast(locationName, units) {
        return fetch(`${API_URL_BASE}${FORECAST}q=${locationName}&mode=json&units=${units}${APP_ID}`);
    }

    //Cria lista de opacidade de acrodo com as temperaturas
    createOpacitiesStyles(temp, temp2, temp3) {
        let temps = [temp, temp2, temp3];
        temps = temps.sort();

        const opacities = [1, 0.9, 0.7];
        const opacitiesStyles = [];
        for (const [i, value] of temps.entries()) {
            if (opacitiesStyles.filter(i => i.temp === value).length === 0)
                opacitiesStyles.push({ opacity: opacities[i], temp: value })
        }
        return opacitiesStyles;
    }

}

export default WeatherForecastService;