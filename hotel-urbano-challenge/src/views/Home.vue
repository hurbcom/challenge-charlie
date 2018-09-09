<template>
  <div class="home">
    <!-- componente que obtém papel de parede -->
    <TheWallPaper/>

    <!-- -->
    <loading 
      :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="true"/>

    <!-- modal de erro caso não consiga obter localização do usuaário -->
    <md-dialog-alert
      :md-active.sync="errorLocation"
      md-title="Não foi possível obter sua localizacão!"
      md-content="Por favor, ative a localização do navegador e recarregue a página"/>

    <!-- card de previsão do tempo -->
    <forecast-card 
      :lat="lat" 
      :long="long" 
      :loading="isLoading" 
      :weather="weather"/>

  </div>
</template>

<script>
// @ is an alias to /src
import TheWallPaper from "@/components/TheWallpaper.vue";
import ForecastCard from "@/components/Forecast/ForecastCard.vue";
import ForecastHeader from "@/components/Forecast/ForecastHeader.vue";
import ForecastToday from "@/components/Forecast/ForecastToday.vue";
import ForecastTomorrow from "@/components/Forecast/ForecastTomorrow.vue";
import ForecastLastDay from "@/components/Forecast/ForecastLastDay.vue";
import api from "@/services/api.js";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.min.css";

export default {
    name: "Home",
    components: {
        TheWallPaper,
        Loading,
        ForecastCard,
        ForecastHeader,
        ForecastToday,
        ForecastTomorrow,
        ForecastLastDay
    },
    data() {
        return {
            isLoading: false,
            lat: "",
            long: "",
            errorLocation: false
        };
    },
    computed: {
        weather() {
            return this.$store.state.weather;
        }
    },
    beforeMount() {
        this.isLoading = true;
        this.getGeolocation();
    },
    methods: {
        getGeolocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        this.lat = position.coords.latitude;
                        this.long = position.coords.longitude;
                        this.getClimate(this.lat, this.long);
                        this.errorLocation = false;
                    },
                    error => {
                        if (error.code === error.PERMISSION_DENIED)
                            this.errorLocation = true;
                        this.isLoading = false;
                    }
                );
            } else {
                this.errorLocation = true;
                this.isLoading = false;
            }
        },
        getClimate(lat, long) {
            return api
                .getClimate(lat, long)
                .then(weather => {
                    this.$store.commit("SET_WEATHER", weather);
                })
                .catch()
                .finally(() => (this.isLoading = false));
        }
    }
};
</script>
<style scoped lang="scss">
</style>
