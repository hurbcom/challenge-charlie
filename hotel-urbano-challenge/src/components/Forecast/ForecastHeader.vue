<template>
  <md-card-header class="header">
    <div class="header__title">
      <img 
        :src="'Location' | iconWeather" 
        class="header__icon"
        alt="Ícone de Localização">
      {{ location ? location : "Não Disponível" }}
    </div>
  </md-card-header>
</template>

<script>
export default {
    name: "ForecastHeader",
    props: ["location"]
};
</script>

<style scoped lang="scss">
@import "@/styles/variables/variables.scss";
@import "@/styles/mixins/media-queries.scss";

.header {
    background: $headerColor;
    color: $headerFontColor;
    font-weight: bold;
    text-align: left;
    @include sm {
        height: initial;
    }
    .header__title {
        @include xs {
            margin-top: -8px;
        }
        font-weight: bold;
        font-size: 25px;
    }
    .header__icon {
        width: 40px;
    }
}
</style>
