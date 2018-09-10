<template>
  <md-card 
    v-show="!loading" 
    class="card">
    <forecast-header :location="weather.location"/>

    <md-card-content 
      id="content" 
      class="card__content">
      <img 
        :src="weather.condition | iconWeather"
        class="card__content--icon"
        alt="Ícone Meteorologia">

      <!--Conteúdo Lateral-->
      <aside class="card__content--aside">

        <!--Primeiro dia-->
        <forecast-today 
          :temp="weather.today"
          :unit="weather.unit"
          :condition="weather.condition"
          :wind="weather.wind"
          :humidity="weather.humidity"
          :pressure="weather.pressure"
          :lat="lat"
          :long="long"/>

        <!--Segundo dia-->
        <forecast-tomorrow 
          :unit="weather.unit"
          :lat="lat"
          :long="long"
          :temperature="weather.tomorrow"/>

        <!--Terceiro dia-->
        <forecast-last-day 
          :unit="weather.unit"
          :lat="lat"
          :long="long"
          :temperature="weather.after"/>
      </aside>
    </md-card-content>

  </md-card>
</template>
<script>
import ForecastHeader from "@/components/Forecast/ForecastHeader.vue";
import ForecastToday from "@/components/Forecast/ForecastToday.vue";
import ForecastTomorrow from "@/components/Forecast/ForecastTomorrow.vue";
import ForecastLastDay from "@/components/Forecast/ForecastLastDay.vue";

export default {
    name: "ForecastCard",
    components: {
        ForecastHeader,
        ForecastToday,
        ForecastTomorrow,
        ForecastLastDay
    },
    props: ["weather", "loading", "lat", "long"],
    updated() {
        this.setGradient(this.weather);
    },
    methods: {
        setGradient(weather) {
            let element = document.getElementById("content");
            if (weather.today) {
                let temp = parseInt(weather.today);
                if (weather.unit === "C" && temp < 15)
                    element.classList.add("card__content--background--blue");
                else if (weather.unit === "C" && temp > 35)
                    element.classList.add("card__content--background--red");
                else element.classList.add("card__content--background--yellow");
            } else if (!weather.today) {
                element.classList.add("card__content--background--default");
            }
        }
    }
};
</script>

<style scoped lang="scss">
@import "@/styles/variables/variables.scss";
@import "@/styles/mixins/media-queries.scss";
@import "@/styles/mixins/linear-gradient.scss";

.card {
    display: inline-block;
    vertical-align: top;
    margin-top: 30px;

    .card__content {
        @include xs {
            height: 380px;
            width: 310px;
        }
        @include md {
            height: 800px;
            width: 600px;
        }
        @include lg {
            height: 600px;
            width: 550px;
        }
        @include rwd(1920, 1080) {
            height: 800px;
            width: 600px;
        }
    }
    .card__content--background--default {
        @include linear-gradient($gradientDefault);
    }
    .card__content--background--yellow {
        @include linear-gradient($gradientYellow);
    }
    .card__content--background--blue {
        @include linear-gradient($gradientBlue);
    }
    .card__content--background--red {
        @include linear-gradient($gradientRed);
    }
    color: $contentColor;
    font-weight: bold;
    text-align: left;

    .card__content--icon {
        @include xs {
            width: 150px;
        }
        @include md {
            width: 320px;
        }
        @include lg {
            width: 245px;
        }
    }

    .card__content--aside {
        @include xs {
            left: 169px;
            top: 52px;
        }
        @include md {
            left: 340px;
        }
        @include rwd(360, 600) {
            top: 63px;
        }
        @include lg {
            left: 270px;
            top: 64px;
        }
        position: absolute;
    }
}
</style>
