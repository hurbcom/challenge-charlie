<template>
  <div class="third-day">
    <p class="third-day__title">DEPOIS DE AMANHÃ</p>
    <div class="third-day__content">
      {{ temperature ? temperature : "N/A" }}
      <div 
        v-show="temperature" 
        class="third-day__degree">
        <p 
          :class="{inactive: unit == 'F'}"
          class="third-day__degree--celsius"
          @click="getClimate(lat, long, 'c')">ºC</p>
        <p 
          :class="{inactive: unit == 'C'}"
          class="third-day__degree--fahreheint inactive"
          @click="getClimate(lat, long, 'f')">ºF</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api.js";

export default {
    name: "ForecastLastDay",
    props: ["unit", "temperature", "lat", "long"],
    methods: {
        getClimate(lat, long, unit) {
            return api
                .getClimate(lat, long, unit)
                .then(weather => {
                    this.$store.commit("SET_WEATHER", weather);
                })
                .catch();
        }
    }
};
</script>

<style scoped lang="scss">
@import "@/styles/mixins/media-queries.scss";
@import "@/styles/placeholders/placeholders.scss";

.third-day {
    .third-day__title {
        @extend %day;
    }
    .third-day__content {
        @extend %temperature;
    }
    .third-day__degree {
        @extend %degree;
        .third-day__degree--fahreheint {
            @extend %fahreheint;
        }
    }
    @include xs {
        margin-top: 52px;
    }
    @include md {
        margin-top: 168px;
    }
    @include lg {
        margin-top: 87px;
    }
    @include rwd(1920, 1080) {
        margin-top: 146px;
    }
}
.inactive {
    @extend %inactive;
}
</style>
