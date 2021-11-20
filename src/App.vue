<template>
  <div class="wrapper-app" :style="backgroundProps">
    <div class="container d-flex flex-column">
        <Search />

        <div class="wrapper-weather d-flex flex-column">
            <div class="d-flex today-weather">
                <div class="icon icon-weather">
                    <span class="icon" data-icon="B"></span>
                </div>

                <div class="details-weather d-flex flex-column">
                    <p class="date">Hoje</p>
                    <p class="temperature">32º</p>

                    <p class="state">Ensolarado</p>

                    <p class="wind">Vento: NO 6.4km/h</p>
                    <p class="humidty">Humidade: 78%</p>
                    <p class="pressure">Pressão: 1003hPa</p>
                </div>
            </div>

            <div class="d-flex tomorrow-weather">
                <div class="icon icon-weather"></div>
                <div class="details-weather d-flex flex-column">
                    <p class="date">Amanhã</p>
                    <p class="temperature">25º</p>
                </div>
            </div>

            <div class="d-flex after-tomorrow-weather">
                <div class="icon icon-weather"></div>
                <div class="details-weather d-flex flex-column">
                    <p class="date">Depois de Amanhã</p>
                    <p class="temperature">22º</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import Search from './components/Search.vue';

export default {
    name: 'App',
    components: {
        Search,
    },
    data: () => ({
        baseApiImageBackground: 'http://www.bing.com',
        urlForBackgroundImage: '',
    }),
    methods: {
        async getImageBackground() {
            const apiUrl = `${this.baseApiImageBackground}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`;
            const { data: { images } } = await axios.get(apiUrl);
            const { url } = images[0];
            this.urlForBackgroundImage = `${this.baseApiImageBackground}${url}`;
        }
    },
    computed: {
        backgroundProps() {
            return {'background-image': `url(${this.urlForBackgroundImage})`}
        }
    },
    created() {
        this.getImageBackground();
    }
};
</script>

<style lang="scss">
    @import url('./fonts/stylesheet.css');
    @import url('./sass/icons.scss');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    html, body {
        background-color: #cdcdcd;
    }

    .d-flex {
        display: flex;

        &.flex-column {
            flex-direction: column;
        }
    }

    .wrapper-app {
        .container {
            height: 100vh;
            width: 50vw;
            min-width: 505px;
            margin: 0 auto;
            background-color: #fff;

            .wrapper-weather {
                > div {
                    padding: 10px 0 20px 0;
                    height: 20vh;

                    &:first-child {
                        height: 45vh;
                    }
                }

                .icon-weather {
                    width: 60%;
                    text-align: center;

                    .icon::before {
                        font-size: 15rem;
                        color: #fff;
                    }
                }

                .details-weather {
                    p {
                        color: #fff;
                        font-size: 1.3rem;
                        font-weight: 400;

                        &.date {
                            text-transform: uppercase;
                        }

                        &.state {
                            padding: 15px 0 20px;
                        }

                        &.wind,
                        &.humidty,
                        &.pressure {
                            font-size: 1rem;
                        }
                    }
                }

                .today-weather { background-color:rgb(212, 198, 0); }
                .tomorrow-weather { background-color:rgb(235, 223, 59); }
                .after-tomorrow-weather { background-color:rgb(165, 156, 26); }
            }
        }
    }
</style>