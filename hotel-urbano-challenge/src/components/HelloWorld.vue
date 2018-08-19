<template>
    <div>

    </div>

</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            lat: "",
            long: "",
            background: ""
        };
    },
    props: {
        msg: String
    },
    beforeMount() {
        this.getGeolocation();
        this.getWallpaper();
    },
    methods: {
        getWallpaper() {
            this.$http
                .get(
                    `https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`
                )
                .then(
                    res => {
                        this.background = `http://www.bing.com${res.body.images[0].url}`;
                        document.body.style.backgroundImage = `url(${this.background})`;
                    },
                    error => {
                        console.log(error);
                    }
                );
        },
        getGeolocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        this.lat = position.coords.latitude;
                        this.long = position.coords.longitude;
                    },
                    error => {
                        if (error.code === error.PERMISSION_DENIED)
                            console.log("error while getting location");
                    }
                );
            } else {
                console.log("error while getting location");
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
