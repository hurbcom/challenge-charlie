<template>
    <div class="home">
        <TheWallPaper/>

        <!-- modal de erro caso não consiga obter localização do usuaário -->
        <md-dialog-alert
                :md-active.sync="errorLocation"
                md-title="Não foi possível obter sua localizacão!"
                md-content="Your post <strong>Material Design is awesome</strong> has been created."/>

        <md-card>
            <md-card-header>
                <div class="md-title">
                    <img src="../assets/svg/44.svg" class="icon" alt="Ícone de Localização">
                    {{weather ? `${weather.location.city},${weather.location.region}` : ''}}
                </div>
            </md-card-header>

            <md-card-content class="md-scrollbar">
                <img src="../assets/svg/2.svg" class="icon-weather" alt="Ícone Meteorologia">
                <!--Conteúdo Lateral-->
                <aside class="aside-content">
                    <!--Primeiro dia-->
                    <div class="first-day">
                        <h2 class="day">HOJE</h2>
                        <div class="temperature">
                            {{weather ? weather.item.condition.temp : ''}}
                            <div class="degree">
                                <p v-bind:class="{ inactive: isFahreheint}" class="celsius"
                                   @click="getClimate(lat, long, celsius)">ºC</p>
                                <p v-bind:class="{ inactive: !isFahreheint}" class="fahreheint"
                                   @click="getClimate(lat, long, fahreheint)">ºF</p>
                            </div>
                        </div>
                        <p class="climate">{{weather ? weather.item.condition.text : ''}}</p>
                        <div class="content-climate">
                            <p>Vento: {{weather ? weather.wind.speed : ''}}{{weather ? weather.units.speed : ''}}</p>
                            <p>Humidade: {{weather ? weather.atmosphere.humidity : ''}}%</p>
                            <p>Pressão: {{weather ? weather.atmosphere.pressure : ''}}{{weather ? weather.units.pressure : ''}}</p>
                        </div>
                    </div>

                    <!--Segundo dia-->
                    <div class="second-day">
                        <p class="day">AMANHÃ</p>
                        <div class="temperature">
                            {{weather ? weather.item.forecast[1].high : ''}}
                            <div class="degree">
                                <p v-bind:class="{ inactive: isFahreheint}" class="celsius"
                                   @click="getClimate(lat, long, celsius)">ºC</p>
                                <p v-bind:class="{ inactive: !isFahreheint}" class="fahreheint"
                                   @click="getClimate(lat, long, fahreheint)">ºF</p>
                            </div>
                        </div>
                    </div>

                    <!--Terceiro dia-->
                    <div class="third-day">
                        <p class="day">DEPOIS DE AMANHÃ</p>
                        <div class="temperature">{{weather ? weather.item.forecast[2].high : ''}}
                            <div class="degree">
                                <p v-bind:class="{ inactive: isFahreheint}" class="celsius"
                                   @click="getClimate(lat, long, celsius)">ºC</p>
                                <p v-bind:class="{ inactive: !isFahreheint}" class="fahreheint inactive"
                                   @click="getClimate(lat, long, fahreheint)">ºF</p>
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
        margin-top: 30px;

        .md-card-header {
            background: $headerColor;
            text-align: left;
            @include sm {
                height: initial;
            }
            .md-title:first-child {
                @include xs {
                    margin-top: -8px;
                }
            }
            .icon {
                width: 40px;
            }
        }

        .md-card-content {
            @include xs {
                height: 380px;
                width: 300px;
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

            .aside-content {
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
            .second-day {
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
            .third-day {
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
            .day {
                @include xs {
                    margin-bottom: 7px;
                    font-size: 13px;
                }
                @include rwd(360, 600) {
                    margin-bottom: -5px;
                    font-size: 13px;
                }
                @include md {
                    font-size: 25px;
                }
                @include lg {
                    margin-bottom: 0;
                    font-size: 25px;
                }
                @include rwd(1920, 1080) {
                    font-size: 30px;
                }
            }
            .temperature {
                @include xs {
                    margin-top: 0;
                    font-size: 16px;
                }
                @include md {
                    font-size: 25px;
                    margin-top: 14px;
                }
                @include lg {
                    margin-top: 17px;
                    font-size: 25px;
                }
                @include rwd(1920, 1080) {
                    font-size: 32px;
                }
            }
            .climate {
                @include xs {
                    font-size: 20px;
                    margin-top: 8px;
                }
                @include md {
                    font-size: 35px;
                    margin-top: 24px;
                }
                @include lg {
                    font-size: 35px;
                }
            }
            .content-climate {
                @include xs {
                    font-size: 12px;
                    margin-top: -13px;
                }
                @include md {
                    font-size: 20px;
                }
                @include lg {
                    font-size: 18px;
                }
                @include rwd(1920, 1080) {
                    font-size: 20px;
                }
                p {
                    margin-bottom: 0;
                    margin-top: 0;
                }
            }
            .degree {
                @include xs {
                    margin-left: 24px;
                    margin-top: -23px;
                }
                @include md {
                    margin-left: 34px;
                }
                @include lg {
                    margin-left: 35px;
                    margin-top: -23px;
                }
                @include xl {
                    margin-left: 43px;
                }
                p {
                    margin-bottom: 0;
                    margin-top: 0;
                    cursor: pointer;
                }
                .fahreheint {
                    @include xs {
                        margin-top: 0;
                    }
                    @include lg {
                        margin-top: 7px;
                    }
                    @include xl {
                        margin-top: 13px;
                    }
                }
                .inactive {
                    opacity: 0.8;
                }
            }
        }
    }
</style>
