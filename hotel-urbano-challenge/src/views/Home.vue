<template>
  <div class="home">
    <TheWallPaper/>

    <!-- modal de erro caso não consiga obter localização do usuaário -->
    <md-dialog-alert
            :md-active.sync="errorLocation"
            md-title="Não foi possível obter sua localizacão!"
            md-content="Your post <strong>Material Design is awesome</strong> has been created." />

    <md-card>
      <md-card-header>
        <div class="md-title">
          <img src="../assets/svg/44.svg" class="icon" alt="Ícone de Localização">
          {{weather ? `${weather.location.city},${weather.location.region}` : ''}}
        </div>
      </md-card-header>

      <md-card-content>
        <img src="../assets/svg/2.svg" class="icon-weather" alt="Ícone Meteorologia">
        <aside class="aside-content">
          <h2 class="day">HOJE</h2>
          <div class="temperature">
            {{weather ? weather.item.condition.temp : ''}}
            <div class="degree">
              <p v-bind:class="{ inactive: isFahreheint}" class="celsius" @click="getClimate(lat, long, celsius)">ºC</p>
              <p v-bind:class="{ inactive: !isFahreheint}" class="fahreheint" @click="getClimate(lat, long, fahreheint)">ºF</p>
            </div>
          </div>
          <p class="climate">{{weather ? weather.item.condition.text : ''}}</p>
          <div class="content-climate">
            <p>Vento: {{weather ? weather.wind.speed : ''}}{{weather ? weather.units.speed : ''}}</p>
            <p>Humidade: {{weather ? weather.atmosphere.humidity : ''}}%</p>
            <p>Pressão: {{weather ? weather.atmosphere.pressure : ''}}{{weather ? weather.units.pressure : ''}}</p>
          </div>
          <div class="second-day">
            <p class="day">AMANHÃ</p>
            <div class="temperature">
              {{weather ? weather.item.forecast[1].high : ''}}
              <div class="degree">
                <p v-bind:class="{ inactive: isFahreheint}" class="celsius" @click="getClimate(lat, long, celsius)">ºC</p>
                <p v-bind:class="{ inactive: !isFahreheint}" class="fahreheint" @click="getClimate(lat, long, fahreheint)">ºF</p>
              </div>
            </div>
          </div>
          <div class="third-day">
            <p class="day">DEPOIS DE AMANHÃ</p>
            <div class="temperature">{{weather ? weather.item.forecast[2].high : ''}}
              <div class="degree">
                <p v-bind:class="{ inactive: isFahreheint}" class="celsius" @click="getClimate(lat, long, celsius)">ºC</p>
                <p v-bind:class="{ inactive: !isFahreheint}" class="fahreheint inactive" @click="getClimate(lat, long, fahreheint)">ºF</p>
              </div>
            </div>
          </div>
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
    },
    data() {
        return {
            isFahreheint: false,
            celsius: "c",
            fahreheint: "f",
            lat: "",
            long: "",
            errorLocation: false,
            weather: ""
        };
    },
    beforeMount() {
        this.getGeolocation();
    },
    methods: {
        getGeolocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        this.lat = position.coords.latitude;
                        this.long = position.coords.longitude;
                        this.getClimate(this.lat, this.long);
                        this.errorLocation = false;
                    },
                    error => {
                        if (error.code === error.PERMISSION_DENIED)
                            this.errorLocation = true;
                    }
                );
            } else {
                this.errorLocation = true;
            }
        },
        getClimate(lat, long, unit) {
            this.isFahreheint = unit === "f";
            this.$http.get(`https://query.yahooapis.com/v1/public/yql?q=
                      select * from weather.forecast where u='${unit ? unit : 'c'}' and
                      woeid in (select woeid from geo.places where text='(${lat}, ${long})')&format=json`)
                .then(res => {
                        this.weather = res.body.query.results.channel;
                    }, () => {
                        console.log("erro");
                    });
        }
    }
};
</script>
<style scoped lang="scss">
@import "../styles/variables/variables.scss";
@import "../styles/mixins/media-queries.scss";

.md-card {
    display: inline-block;
    vertical-align: top;
    height: 100vh;
    @include xs {
        width: 92vw;
    }
    @include md {
        width: 80vw;
    }
    @include lg {
        width: 45vw;
    }

    .md-card-header {
        background: $headerColor;
        text-align: left;
        @include xs {
            height: 11vh;
        }
        @include sm {
            height: initial;
        }

        .icon {
            width: 40px;
        }
    }

    .md-card-content {
        height: 100vh;
        @include md {
            height: 93vh;
        }
        @include sm {
            height: 92vh;
        }
        @include xs {
            height: 89vh;
        }
        @include md {
            height: 93vh;
        }
        @include lg {
            height: 90vh;
        }
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
        font-weight: bold;
        text-align: left;

        .icon-weather {
            width: 320px;
        }

        .aside-content {
            float: right;
            margin-right: 0px;
        }
        .second-day {
            margin-top: 27%;
        }
        .third-day {
            margin-top: 4%;
        }
        .day {
            margin-bottom: 0px;
            font-size: 30px;
        }
        .temperature {
            margin-top: 17px;
            font-size: 25px;
        }
        .climate {
            font-size: 35px;
        }
        .content-climate {
            font-size: 18px;
            p {
                margin-bottom: 0;
                margin-top: 0;
            }
        }
        .degree {
            margin-left: 35px;
            margin-top: -23px;
            p {
                margin-bottom: 0;
                margin-top: 0;
                cursor: pointer;
            }
            .fahreheint {
                margin-top: 7px;
            }
            .inactive {
                opacity: 0.8;
            }
        }
    }
}
</style>
