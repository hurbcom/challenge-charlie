<template>
    <div id="content">
        <h1><span class="icon-font">( </span>{{weather.city}}, {{weather.region}}</h1>



        <div>
            <span class="icon-font">
                {{weather.condition | iconWeather}}
            </span>

            {{weather.todayC}}
            {{weather.condition | translate}}
            Vento:{{weather.windDirection}} {{weather.windSpeed}}
            Humidade:{{weather.humidity}}
            Pressão: {{weather.pressure}}
        </div>
        <div>
            Amanhã
            {{weather.tomorrowC}}
        </div>

        <div>
            Depois de amanhã
            {{weather.afterC}}
        </div>
    </div>
</template>
<script>

export default {
    name: "Weather",
    props: ["weather", "lat", "long"],
    updated() {
        this.setGradient(this.weather);
    },
    methods: {
        setGradient(weather) {
            let element = document.getElementById("content");
            if (weather.today) {
                let temp = parseInt(weather.today);
                if (weather.today === "C" && temp < 15)
                    element.classList.add("card__content--background--blue");
                else if (weather.today === "C" && temp > 35)
                    element.classList.add("card__content--background--red");
                else element.classList.add("card__content--background--yellow");
            } else if (!weather.today) {
                element.classList.add("card__content--background--default");
            }
        }
    }
};
</script>

<style >
.icon-font {
    font-family: 'MeteoconsRegular';
    font-size: 80px;
}

</style>
