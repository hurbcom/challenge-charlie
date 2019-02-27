<template>

  <div class="home">
    <wallPaper></wallPaper>
    <weather
      :lat="lat"
      :long="long"
      :weather="weather"></weather>
  </div>
</template>

<script>

import Mainsite from '@/components/Mainsite.vue';
import WallPaper from "@/components/Wallpaper.vue";
import Weather from "@/components/Weather.vue";
import api from "@/services/api.js";

export default {
    name: "Home",
    components: {
        Weather,
        WallPaper
    },
    data() {
        return {
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
                    }
                );
            } else {
                this.errorLocation = true;
            }
        },
        getClimate(lat, long) {
            return api
                .getClimate(lat, long)
                .then(weather => {
                    this.$store.commit("SET_WEATHER", weather);
                })
                .catch()
                .finally();
        }
    }
};
</script>

<style >

body, html {
    width: 100%;
    height: 100%;
}

body {
    background-size: cover;
}


@font-face {
  font-family: 'MeteoconsRegular';
  src: url('https://vinnycl.github.io/statics/fonts/meteocons.eot');
  src: url('https://vinnycl.github.io/statics/fonts/meteocons.eot?#iefix') format('embedded-opentype'),
  url('https://vinnycl.github.io/statics/fonts/meteocons.woff') format('woff'),
  url('https://vinnycl.github.io/statics/fonts/meteocons.ttf') format('truetype'),
  url('https://vinnycl.github.io/statics/fonts/meteocons.svg#MeteoconsRegular') format('svg');
  font-weight: normal;
  font-style: normal;
}
</style>
