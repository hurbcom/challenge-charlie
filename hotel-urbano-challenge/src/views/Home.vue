<template>
  <div class="home">
    <TheWallPaper/>

    <md-card>
      <md-card-header>
        <div class="md-title">
          <img src="../assets/svg/44.svg" class="icon" alt="Ícone de Localização">
          Rio de Janeiro, Rio de Janeiro
        </div>
      </md-card-header>

      <md-card-content>
        <img src="../assets/svg/2.svg" class="icon-weather" alt="Ícone Meteorologia">
        <aside class="aside-content">
          <p>Vento:</p>
          <p>Humidade:</p>
          <p>Pressão:</p>
        </aside>
      </md-card-content>

    </md-card>

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
<style scoped lang="scss">
@import "../styles/variables/variables.scss";
.md-card {
    margin: 0 auto;
    display: inline-block;
    vertical-align: top;

    .md-card-header {
        background: $headerColor;
        text-align: left;

        .icon {
            width: 40px;
        }
    }

    .md-card-content {
        height: 500px;
        background: rgb(242, 192, 31);
        background: linear-gradient(
            180deg,
            rgba(242, 192, 31, 0.9) 46%,
            rgba(255, 251, 15, 1) 46%,
            rgba(248, 235, 8, 0.9) 46%,
            rgba(245, 228, 5, 1) 76%,
            rgba(221, 207, 23, 0.9) 76%
        );
        color: #fff;
        font-family: Arial;
        font-weight: bold;
        text-align: left;

        .icon-weather {
            width: 200px;
        }

        .aside-content {
            float: right;
            margin-right: 150px;
        }
    }
}
</style>
