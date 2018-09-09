<template>
  <div class="second-day">
    <p class="second-day__title">AMANHÃ</p>
    <div class="second-day__content">
      {{ temperature ? temperature : "N/A" }}
      <div 
        v-show="temperature" 
        class="second-day__degree">
        <p 
          :class="{inactive: unit == 'F'}"
          class="second-day__degree--celsius"
          @click="getClimate(lat, long, 'c')">ºC</p>
        <p 
          :class="{inactive: unit == 'C'}"
          class="second-day__degree--fahreheint"
          @click="getClimate(lat, long, 'f')">ºF</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api.js";

export default {
    name: "ForecastTomorrow",
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

.second-day {
    .second-day__title {
        @extend %day;
    }
    .second-day__content {
        @extend %temperature;
    }
    .second-day__degree {
        @extend %degree;
        .second-day__degree--fahreheint {
            @extend %fahreheint;
        }
    }
    @include xs {
        margin-top: -11px;
    }
    @include md {
        margin-top: 150px;
    }
    @include lg {
        margin-top: 52px;
    }
    @include rwd(1920, 1080) {
        margin-top: 146px;
    }
}
.inactive {
    @extend %inactive;
}
</style>
