export default {
    filters: {
        translate: function (value) {
            let translated = "";
            switch (value) {
                case "Tornado":
                    translated = "Tornado";
                    break;
                case "Tropical Storm":
                    translated = "Temp. Tropical";
                    break;
                case "Hurricane":
                    translated = "Furacão";
                    break;
                case "Severe Thunderstorms":
                    translated = "Temp. Severas";
                    break;
                case "Thunderstorms":
                    translated = "Trovoadas";
                    break;
                case "Mixed Rain and Snow":
                    translated = "Chuva e Neve";
                    break;
                case "Mixed Rain and Sleet":
                    translated = "Chuva e Granizo";
                    break;
                case "Mixed Snow and Sleet":
                    translated = "Neve e Granizo";
                    break;
                case "Freezing Drizzle":
                    translated = "Chuvisco Cong.";
                    break;
                case "Drizzle":
                    translated = "Chuvisco";
                    break;
                case "Freezing Rain":
                    translated = "Chuva Congelante";
                    break;
                case "Showers":
                    translated = "Chuva Forte";
                    break;
                case "Snow Flurries":
                    translated = "Flocos de Neve";
                    break;
                case "Light Snow Showers":
                    translated = "Nevasca Leve";
                    break;
                case "Blowing Snow":
                    translated = "Temp. de Neve";
                    break;
                case "Snow":
                    translated = "Neve";
                    break;
                case "Hail":
                    translated = "Granizo";
                    break;
                case "Sleet":
                    translated = "Granizo";
                    break;
                case "Foggy":
                    translated = "Nebuloso";
                    break;
                case "Haze":
                    translated = "Neblina";
                    break;
                case "Smoky":
                    translated = "Nevoeiro";
                    break;
                case "Blustery":
                    translated = "Tempestade";
                    break;
                case "Windy":
                    translated = "Ventania";
                    break;
                case "Cold":
                    translated = "Frio";
                    break;
                case "Cloudy":
                    translated = "Nublado";
                    break;
                case "Mostly Cloudy":
                    translated = "Pred. Nublado";
                    break;
                case "Partly Cloudy":
                    translated = "Parc. Nublado";
                    break;
                case "Clear":
                    translated = "Céu Limpo";
                    break;
                case "Sunny":
                    translated = "Ensolarado";
                    break;
                case "Fair":
                    translated = "Bom";
                    break;
                case "Hot":
                    translated = "Calor";
                    break;
                case "Isolated Thunderstorms":
                    translated = "Temp. Isoladas";
                    break;
                case "Scattered Thunderstorms":
                    translated = "Temp. Dispersas";
                    break;
                case "Scattered Showers":
                    translated = "Chuvas Isoladas";
                    break;
                case "Heavy Snow":
                    translated = "Neve Pesada";
                    break;
                case "Thundershowers":
                    translated = "Trovoadas";
                    break;
                case "Isolated Thundershowers":
                    translated = "Trov. Isoladas";
                    break;
                default:
                    translated = "Não Disponível";
            }
            return translated;
        },
        iconWeather: function (value) {
            let icon = "";
            switch (value) {
                case "Tornado":
                    icon = "6.svg";
                    break;
                case "Tropical Storm":
                    icon = "26.svg";
                    break;
                case "Severe Thunderstorms":
                    icon = "42.svg";
                    break;
                case "Thunderstorms":
                    icon = "27.svg";
                    break;
                case "Mixed Rain and Snow":
                    icon = "24.svg";
                    break;
                case "Mixed Rain and Sleet":
                    icon = "18.svg";
                    break;
                case "Mixed Snow and Sleet":
                    icon = "23.svg";
                    break;
                case "Freezing Drizzle":
                    icon = "24.svg";
                    break;
                case "Drizzle":
                    icon = "17.svg";
                    break;
                case "Freezing Rain":
                    icon = "24.svg";
                    break;
                case "Showers":
                    icon = "18.svg";
                    break;
                case "Snow Flurries":
                    icon = "21.svg";
                    break;
                case "Light Snow Showers":
                    icon = "23.svg";
                    break;
                case "Blowing Snow":
                    icon = "23.svg";
                    break;
                case "Snow":
                    icon = "22.svg";
                    break;
                case "Hail":
                    icon = "24.svg";
                    break;
                case "Sleet":
                    icon = "24.svg";
                    break;
                case "Foggy":
                    icon = "25.svg";
                    break;
                case "Haze":
                    icon = "12.svg";
                    break;
                case "Smoky":
                    icon = "12.svg";
                    break;
                case "Blustery":
                    icon = "27.svg";
                    break;
                case "Windy":
                    icon = "6.svg";
                    break;
                case "Cold":
                    icon = "7.svg";
                    break;
                case "Cloudy":
                    icon = "12.svg";
                    break;
                case "Mostly Cloudy":
                    icon = "41.svg";
                    break;
                case "Partly Cloudy":
                    icon = "25.svg";
                    break;
                case "Clear":
                    icon = "14.svg";
                    break;
                case "Sunny":
                    icon = "2.svg";
                    break;
                case "Fair":
                    icon = "14.svg";
                    break;
                case "Hot":
                    icon = "2.svg";
                    break;
                case "Isolated Thunderstorms":
                    icon = "16.svg";
                    break;
                case "Scattered Thunderstorms":
                    icon = "18.svg";
                    break;
                case "Scattered Showers":
                    icon = "20.svg";
                    break;
                case "Heavy Snow":
                    icon = "23.svg";
                    break;
                case "Thundershowers":
                    icon = "27.svg";
                    break;
                case "Isolated Thundershowers":
                    icon = "27.svg";
                    break;
                case "Location":
                    icon = "44.svg";
                    break;
                default:
                    icon = "45.svg";
            }
            return `https://s3.us-east-2.amazonaws.com/hotel-urbano-challenge/${icon}`;
        }
    },
    create: function(Vue) {
        Object.keys(this.filters).forEach(function (filter,k) {
            Vue.filter(filter, this.filters[filter])
        }.bind(this))
    }
}