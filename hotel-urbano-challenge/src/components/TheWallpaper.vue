<template>
  <md-dialog-alert
    :md-active.sync="errorWallpaper"
    md-title="Não foi possível carregar o papel de parede!"/>
</template>

<script>
import api from "@/services/api";

export default {
    name: "TheWallpaper",
    data() {
        return {
            errorWallpaper: false
        };
    },
    beforeMount() {
        this.getWallpaper();
    },
    methods: {
        getWallpaper() {
            return api
                .getWallpaper()
                .then(wallpaper => {
                    this.setWallpaper(wallpaper);
                })
                .catch(() => (this.errorWallpaper = true));
        },
        setWallpaper(wallpaper) {
            document.getElementById(
                "app"
            ).style.backgroundImage = `url(http://www.bing.com${
                wallpaper.images[0].url
            })`;
        }
    }
};
</script>
