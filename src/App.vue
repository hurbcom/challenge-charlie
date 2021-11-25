<template>
  <div class="wrapper-app" :style="backgroundProps">
    <div class="container d-flex flex-column">
        <Search />

        <div class="wrapper-weather d-flex flex-column">
            <Weather
                v-if="weathers[0]"
                title="Hoje"
                :weather="weathers[0]"
                :showCelsius="showCelsius"
                @changeTemperatureType="changeTemperatureType"
            />

            <Weather
                v-if="weathers[1]"
                title="Amanhã"
                :weather="weathers[1]"
                :showCelsius="showCelsius"
                @changeTemperatureType="changeTemperatureType"
            />

            <Weather
                v-if="weathers[2]"
                title="Depois de Amanhã"
                :weather="weathers[2]"
                :showCelsius="showCelsius"
                @changeTemperatureType="changeTemperatureType"
            />

        </div>
    </div>
  </div>
</template>

<script>
import Search from './components/Search.vue';
import Weather from './components/Weather.vue';

export default {
    name: 'App',
    components: {
        Search,
        Weather,
    },
    data: () => ({
        showCelsius: true,
    }),
    methods: {
        changeTemperatureType(type) {
            this.showCelsius = (type === 'C');
        },
    },
    computed: {
        backgroundProps() {
            return {
                'background-image': `url(${this.$store.getters['app/backgroundImageUrl']})`
            };
        },
        weathers() {
            return this.$store.state.search.weathers;
        }
    },
    created() {
        this.$store.dispatch('app/getImageBackground');
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
        }
    }
</style>