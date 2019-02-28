<template>

  <div class="home">
    <wallPaper></wallPaper>
    <weather></weather>
  </div>
</template>

<script>

import WallPaper from "@/components/Wallpaper.vue";
import Weather from "@/components/Weather.vue";


export default {
    name: "Home",
    components: {
        Weather,
        WallPaper
    }
};
</script>

<style >

html {
    width: 100%;
    height: 100%;
}

body {
    background-size: cover;
    background-attachment: fixed;
    background-position: 50% 50%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
}

</style>
