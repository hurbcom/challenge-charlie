export default {
    filters: {
        translate: function(value) {
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
        iconWeather: function(value) {
            let icon = "";
            switch (value) {
                case "Tornado":
                    icon = "F";
                    break;
                case "Tropical Storm":
                    icon = "Z";
                    break;
                case "Severe Thunderstorms":
                    icon = "&";
                    break;
                case "Thunderstorms":
                    icon = "0";
                    break;
                case "Mixed Rain and Snow":
                    icon = "X";
                    break;
                case "Mixed Rain and Sleet":
                    icon = "R";
                    break;
                case "Mixed Snow and Sleet":
                    icon = "W";
                    break;
                case "Freezing Drizzle":
                    icon = "X";
                    break;
                case "Drizzle":
                    icon = "Q";
                    break;
                case "Freezing Rain":
                    icon = "X";
                    break;
                case "Showers":
                    icon = "R";
                    break;
                case "Snow Flurries":
                    icon = "U";
                    break;
                case "Light Snow Showers":
                    icon = "W";
                    break;
                case "Blowing Snow":
                    icon = "W";
                    break;
                case "Snow":
                    icon = "V";
                    break;
                case "Hail":
                    icon = "X";
                    break;
                case "Sleet":
                    icon = "X";
                    break;
                case "Foggy":
                    icon = "Y";
                    break;
                case "Haze":
                    icon = "L";
                    break;
                case "Smoky":
                    icon = "L";
                    break;
                case "Blustery":
                    icon = "0";
                    break;
                case "Windy":
                    icon = "F";
                    break;
                case "Cold":
                    icon = "G";
                    break;
                case "Cloudy":
                    icon = "L";
                    break;
                case "Mostly Cloudy":
                    icon = "%";
                    break;
                case "Partly Cloudy":
                    icon = "Y";
                    break;
                case "Clear":
                    icon = "N";
                    break;
                case "Sunny":
                    icon = "B";
                    break;
                case "Fair":
                    icon = "N";
                    break;
                case "Hot":
                    icon = "B";
                    break;
                case "Isolated Thunderstorms":
                    icon = "P";
                    break;
                case "Scattered Thunderstorms":
                    icon = "R";
                    break;
                case "Scattered Showers":
                    icon = "T";
                    break;
                case "Heavy Snow":
                    icon = "W";
                    break;
                case "Thundershowers":
                    icon = "0";
                    break;
                case "Isolated Thundershowers":
                    icon = "0";
                    break;
                case "Location":
                    icon = "(";
                    break;
                default:
                    icon = ")";
            }
            return `${icon}`;
        }
    },
    create: function(Vue) {
        Object.keys(this.filters).forEach(
            function(filter) {
                Vue.filter(filter, this.filters[filter]);
            }.bind(this)
        );
    }
};