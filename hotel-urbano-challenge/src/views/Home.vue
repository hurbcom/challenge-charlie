<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TheWallPaper/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheWallPaper from "@/components/TheWallpaper.vue";

export default {
    name: "home",
    components: {
        TheWallPaper
    }
};
</script>
