<template>

  <div class="home">
    <wallPaper></wallPaper>
  </div>
</template>

<script>

import Mainsite from '@/components/Mainsite.vue';
import WallPaper from "@/components/Wallpaper.vue";
import api from "@/services/api.js";

export default {
    name: "Home",
    components: {
        Mainsite,
        WallPaper
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

<style >

body, html {
    width: 100%;
    height: 100%;
}

body {
    background-size: cover;
}
</style>
