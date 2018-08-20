<template>
    <div>
        <md-progress-bar md-mode="indeterminate"></md-progress-bar>

        <!-- modal de erro caso não consiga obter localização do usuaário -->
        <md-dialog-alert
                :md-active.sync="errorLocation"
                md-title="Não foi possível obter sua localizacão!"
                md-content="Your post <strong>Material Design is awesome</strong> has been created." />


    </div>
</template>

<script>
import BASE_URL from "../config";
export default {
    name: "HelloWorld",
    data() {
        return {
            lat: "",
            long: "",
            background: "",
            loading: false,
            errorLocation: false,
            errorWallpaper: false
        };
    },
    beforeMount() {
        this.getGeolocation();
        this.getWallpaper();
    },
    methods: {
        getWallpaper() {
            this.loading = true;
            this.$http
                .get(
                    `${BASE_URL}https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`
                )
                .then(res => {
                        this.background = `http://www.bing.com${res.body.images[0].url}`;
                        document.body.style.backgroundImage = `url(${this.background})`;
                        this.loading = false;
                    },
                    () => {
                        this.errorWallpaper = true;
                    }
                );
        },
        getGeolocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        this.lat = position.coords.latitude;
                        this.long = position.coords.longitude;
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
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.md-progress-bar {
    margin: 24px;
}
.md-dialog {
    background: #ffffff;
}
</style>
