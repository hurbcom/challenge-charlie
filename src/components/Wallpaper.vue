<template>
</template>

<script>
import api from "@/services/api";

export default {
    name: "Wallpaper",
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
            document.body.style.backgroundImage = `url(http://www.bing.com${wallpaper.images[0].url})`
        }
    }
};
</script>
