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
        case "tropical storm":
            translated = "Temp. Tropical";
            break;
        case "hurricane":
            translated = "Furacão";
            break;
        case "severe thunderstorms":
            translated = "Temp. Severas";
            break;
        case "thunderstorms":
            translated = "Trovoadas";
            break;
        case "mixed rain and snow":
            translated = "Chuva e Neve";
            break;
        case "mixed rain and sleet":
            translated = "Chuva e Granizo";
            break;
        case "mixed snow and sleet":
            translated = "Neve e Granizo";
            break;
        case "freezing drizzle":
            translated = "Chuvisco Cong.";
            break;
        case "drizzle":
            translated = "Chuvisco";
            break;
        case "freezing rain":
            translated = "Chuva Congelante";
            break;
        case "showers":
            translated = "Chuva Forte";
            break;
        case "snow flurries":
            translated = "Flocos de Neve";
            break;
        case "light snow showers":
            translated = "Nevasca Leve";
            break;
        case "blowing snow":
            translated = "Temp. de Neve";
            break;
        case "snow":
            translated = "Neve";
            break;
        case "hail":
            translated = "Granizo";
            break;
        case "sleet":
            translated = "Granizo";
            break;
        case "foggy":
            translated = "Nebuloso";
            break;
        case "haze":
            translated = "Neblina";
            break;
        case "smoky":
            translated = "Nevoeiro";
            break;
        case "blustery":
            translated = "Tempestade";
            break;
        case "windy":
            translated = "Ventania";
            break;
        case "cold":
            translated = "Frio";
            break;
        case "cloudy":
            translated = "Nublado";
            break;
        case "mostly cloudy":
            translated = "Pred. Nublado";
            break;
        case "partly cloudy":
            translated = "Parc. Nublado";
            break;
        case "clear":
            translated = "Céu Limpo";
            break;
        case "sunny":
            translated = "Ensolarado";
            break;
        case "fair":
            translated = "Bom";
            break;
        case "hot":
            translated = "Calor";
            break;
        case "isolated thunderstorms":
            translated = "Temp. Isoladas";
            break;
        case "scattered thunderstorms":
            translated = "Temp. Dispersas";
            break;
        case "scattered showers":
            translated = "Chuvas Isoladas";
            break;
        case "heavy snow":
            translated = "Neve Pesada";
            break;
        case "thundershowers":
            translated = "Trovoadas";
            break;
        case "isolated thundershowers":
            translated = "Trov. Isoladas";
            break;
        case "not available":
            translated = "Não Disponível";
            break;
        default:
            translated = "";
    }
    return condition;
});

new Vue({
    router,
    store,
    VueResource,
    render: h => h(App)
}).$mount("#app");
