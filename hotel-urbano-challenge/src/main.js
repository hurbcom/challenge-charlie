import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueMaterial);

Vue.filter("toPtBr", function (condition) {
    let translated = "";
    switch (condition) {
        case "Tornado":
            translated = "Tornado";
            break;
        case "Tropical storm":
            translated = "Temp. Tropical";
            break;
        case "Hurricane":
            translated = "Furacão";
            break;
        case "Severe thunderstorms":
            translated = "Temp. Severas";
            break;
        case "Thunderstorms":
            translated = "Trovoadas";
            break;
        case "Mixed rain and snow":
            translated = "Chuva e Neve";
            break;
        case "Mixed rain and sleet":
            translated = "Chuva e Granizo";
            break;
        case "Mixed snow and sleet":
            translated = "Neve e Granizo";
            break;
        case "Freezing drizzle":
            translated = "Chuvisco Cong.";
            break;
        case "Drizzle":
            translated = "Chuvisco";
            break;
        case "Freezing rain":
            translated = "Chuva Congelante";
            break;
        case "Showers":
            translated = "Chuva Forte";
            break;
        case "Snow flurries":
            translated = "Flocos de Neve";
            break;
        case "Light snow showers":
            translated = "Nevasca Leve";
            break;
        case "Blowing snow":
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
        case "Mostly cloudy":
            translated = "Pred. Nublado";
            break;
        case "Partly cloudy":
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
        case "Isolated thunderstorms":
            translated = "Temp. Isoladas";
            break;
        case "Scattered thunderstorms":
            translated = "Temp. Dispersas";
            break;
        case "Scattered showers":
            translated = "Chuvas Isoladas";
            break;
        case "Heavy snow":
            translated = "Neve Pesada";
            break;
        case "Thundershowers":
            translated = "Trovoadas";
            break;
        case "Isolated thundershowers":
            translated = "Trov. Isoladas";
            break;
        case "Not available":
            translated = "Não Disponível";
            break;
        default:
            translated = "";
    }
    return translated;
});

new Vue({
    router,
    store,
    VueResource,
    render: h => h(App)
}).$mount("#app");
