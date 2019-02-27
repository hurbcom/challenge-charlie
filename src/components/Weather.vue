<template>
    <main class="content">

        <h1 class="colors"><span class="icon-font">( </span> {{weather.city}}, {{weather.region}}</h1>

        <div class="box-condition colors todayC">

            <span class="icon-font">
                {{weather.condition | iconWeather}}
            </span>

            <span class="data">Hoje</span>
            <span class="celsius">{{weather.todayC}}˚C</span>
            <span class="fahrenheit">{{weather.today}}˚F</span>
            <span class="weather">{{weather.condition | translate}}</span>


            <ul class="wind-list">
                <li>Vento: {{weather.windDirection}} {{weather.windSpeed}} km/h</li>
                <li>Humidade:{{weather.humidity}} %</li>
                <li>Pressão: {{weather.pressure}} hPA</li>
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
            console.log(day);
            let dayF = day;
            console.log(dayF);
            let element = document.querySelector(`.colors.${day}`);
            console.log(element);
            if (`weather.${day}`) {
                let temp = parseInt(`weather.${day}`);
                if (`weather.${day}` === "C" && temp < 15)
                    element.classList.add("background-blue");
                else if (`weather.${day}` === "C" && temp > 35)
                    element.classList.add("background-red");
                else element.classList.add("background-yellow");
            }
        }
    }
};
</script>

<style >
.content {
    max-width: 32em;
    margin: 0 auto;
}
.content h1 {
    margin: 0;
    padding: 0.9em;
    font-size: 1.5em;
    line-height: 1.5em;
    text-align: center;
    color: #8d8a87;
    display: flex;
    justify-content: center;
    text-align: center;
}

.content h1 .icon-font {
    font-size: 2em;
    margin-right: 0.3em;
}

.box-condition {
    color: #fff;
    text-shadow: 1px 1px 2px #00000085;
    padding-left: 55%;
    position: relative;
    padding-bottom: 2em;
}

.box-condition > .icon-font {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    text-align: center;
    font-size: 900%;
    padding-top: 0.2em;
}

.box-condition .data {
    display: block;
    text-transform: uppercase;
    font-size: 1.2em;
    padding-top: 1em;
}

.box-condition .celsius, .box-condition .fahrenheit {
    font-size: 1.5em;
}

.content.fahrenheit .box-condition .celsius, .box-condition .fahrenheit {
    display: none;
}

.content.fahrenheit .box-condition .fahrenheit {
    display: block;
}

.box-condition .weather {
    display: block;
    font-size: 1.2em;
    padding-top: 1em;
}

.box-condition .wind-list {
    list-style: none;
    padding: 1em 0 0 0;
    margin: 0;
}

.box-condition .wind-list li {
    padding-top: 0.1em;
}

.icon-font {
    font-family: 'MeteoconsRegular';
}

.colors {
    background-color: #efebe7c2;
}

.background-yellow {
    background-color: #e3b612ad;
}

.tomorrowC.background-yellow {
    background-color: #facc05cf;
}

.afterC.background-yellow {
    background-color: #b79404e8;
}

.background-red {
    background-color: #d01e1ead;
}

.tomorrowC.background-red {
    background-color: #d41e1ecf;
}

.afterC.background-red {
    background-color: #ea0909e8;
}


.background-blue {
    background-color: #1e76d0ad;
}

.tomorrowC.background-blue {
    background-color: #1e76d0cf;
}

.afterC.background-blue {
    background-color: #1e76d0e8;
}


</style>
