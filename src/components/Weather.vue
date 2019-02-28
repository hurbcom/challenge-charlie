<template>
    <main class="content">

        <h1 class="colors"><span class="icon-font">( </span> {{weather.city}}, {{weather.region}}</h1>

        <div class="box-condition colors todayC">

            <span class="icon-font">
                {{weather.condition | iconWeather}}
            </span>

            <span class="data">Hoje</span>
            <span class="converter" v-on:click="convertTemperature()">
                <span class="celsius">{{weather.todayC}}˚C</span>
                <span class="fahrenheit">{{weather.today}}˚F</span>
            </span>

            <span class="weather">{{weather.condition | translate}}</span>


            <ul class="wind-list">
                <li>Vento: {{weather.windDirection}} {{weather.windSpeed}} km/h</li>
                <li>Humidade: {{weather.humidity}}%</li>
                <li>Pressão: {{weather.pressure}}hPA</li>
            </ul>
        </div>

        <div class="box-condition colors tomorrowC">
            <span class="data">Amanhã</span>
            <span class="celsius">{{weather.tomorrowC}}˚C</span>
            <span class="fahrenheit">{{weather.tomorrow}}˚F</span>
        </div>

        <div class="box-condition colors afterC">
            <span class="data">Depois de amanhã</span>
            <span class="celsius">{{weather.afterC}}˚C</span>
            <span class="fahrenheit">{{weather.after}}˚F</span>
        </div>

    </main>
</template>
<script>

export default {
    name: "Weather",
    props: ["weather", "lat", "long"],
    updated() {
        this.setGradient(this.weather, 'todayC');
        this.setGradient(this.weather, 'tomorrowC');
        this.setGradient(this.weather, 'afterC');
    },
    methods: {
        setGradient(weather, day) {

            let element = document.querySelector(`.colors.${day}`);

            let min = 15;
            let max = 35;

            if (weather.todayC < min)
                element.classList.add("background-blue");
            else if (weather.todayC  > max)
                element.classList.add("background-red");
            else element.classList.add("background-yellow");

            if (weather.tomorrowC < min)
                element.classList.add("background-blue");
            else if (weather.tomorrowC  > max)
                element.classList.add("background-red");
            else element.classList.add("background-yellow");

            if (weather.afterC < min)
                element.classList.add("background-blue");
            else if (weather.afterC  > max)
                element.classList.add("background-red");
            else element.classList.add("background-yellow");

        },
        convertTemperature() {
            let element = document.querySelector('.content');
            element.classList.toggle("fahrenheit");
        }
    }
};
</script>

<style scoped lang="less">
@import "../styles/variables.less";
@import "../styles/mixins/media-queries.less";

@font-face {
  font-family: 'MeteoconsRegular';
  src: url('https://vinnycl.github.io/statics/fonts/meteocons.eot');
  src: url('https://vinnycl.github.io/statics/fonts/meteocons.eot?#iefix') format('embedded-opentype'),
  url('https://vinnycl.github.io/statics/fonts/meteocons.woff') format('woff'),
  url('https://vinnycl.github.io/statics/fonts/meteocons.ttf') format('truetype'),
  url('https://vinnycl.github.io/statics/fonts/meteocons.svg#MeteoconsRegular') format('svg');
  font-weight: normal;
  font-style: normal;
}

.content {
    max-width: @grid-value;
    margin: 0 auto;
    @media @desktop {
        max-width: @grid-desktop;
        margin: 0 auto;
        font-size: 3em;
    }
    h1 {
        margin: 0;
        padding: 0.9em;
        font-size: 1.5em;
        line-height: 1.5em;
        text-align: center;
        color: @text-color-default;
        display: flex;
        justify-content: center;
        text-align: center;
        .icon-font {
            font-size: 2em;
            margin-right: 0.3em;
        }
    }
    .icon-font {
        font-family: 'MeteoconsRegular';
    }
    .colors {
        background-color: @background-color-default;
    }

    .background-yellow {
        background-color: @background-yellow1;
    }

    .tomorrowC.background-yellow {
        background-color: @background-yellow2;
    }

    .afterC.background-yellow {
        background-color: @background-yellow3;
    }

    .background-red {
        background-color: @background-red1;
    }

    .tomorrowC.background-red {
        background-color: @background-red2;
    }

    .afterC.background-red {
        background-color: @background-red3;
    }

    .background-blue {
        background-color: @background-blue1;
    }

    .tomorrowC.background-blue {
        background-color: @background-blue2;
    }

    .afterC.background-blue {
        background-color: @background-blue3;
    }
}

.box-condition {
    color: @text-color-colored;
    text-shadow: 1px 1px 2px #00000085;
    padding-left: 55%;
    position: relative;
    padding-bottom: 2em;
    @media @desktop {
        &.todayC {
            height: 15em;
        }
    }
    .converter {
        cursor: pointer;
    }
    & > .icon-font {
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        text-align: center;
        font-size: 900%;
        padding-top: 0.2em;
        @media @desktop {
            font-size: 1200%;
        }
    }

    .data {
        display: block;
        text-transform: uppercase;
        font-size: 1.2em;
        padding-top: 1em;
    }
    .celsius, .fahrenheit {
        font-size: 1.5em;
    }
    .weather {
        display: block;
        font-size: 1.2em;
        padding-top: 1em;
    }
    .wind-list {
        list-style: none;
        padding: 1em 0 0 0;
        margin: 0;
        li {
            padding-top: 0.1em;
        }
    }
}

.content.fahrenheit .box-condition .celsius, .box-condition .fahrenheit {
    display: none;
}

.content.fahrenheit .box-condition .fahrenheit {
    display: block;
}

</style>
