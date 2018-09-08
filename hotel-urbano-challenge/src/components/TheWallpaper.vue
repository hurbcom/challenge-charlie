<!--suppress ALL -->
<template>

</template>

<script>
import BASE_URL from "../config";
export default {
    name: "HelloWorld",
    data() {
        return {
            background: "",
            loading: false,
            errorLocation: false,
            errorWallpaper: false
        };
    },
    beforeMount() {
        this.getWallpaper();
    },
    methods: {
        getWallpaper() {
            document.getElementById("app").style.display = "none";
            this.loading = true;
            this.$http
                .get(`${BASE_URL}https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`)
                 .then(
                    res => {
                        this.background = `http://www.bing.com${res.body.images[0].url}`;
                        document.getElementById("app").style.backgroundImage = `url(${this.background})`;
                        document.getElementById("app").style.display = "block";
                        this.loading = false;
                    },
                    () => {
                        this.errorWallpaper = true;
                    }
                );
        },
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.md-dialog {
    background: #ffffff;
}
</style>
