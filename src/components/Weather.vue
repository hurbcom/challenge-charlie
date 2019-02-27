<template>
    <main class="content">
        <h1 class="colors"><span class="icon-font">( </span>{{weather.city}}, {{weather.region}}</h1>
        <div class="colors todayC">
            <span class="icon-font">
                {{weather.condition | iconWeather}}
            </span>

            <span>{{weather.todayC}}</span><span>{{weather.today}}</span>
            {{weather.condition | translate}}
            Vento:{{weather.windDirection}} {{weather.windSpeed}}
            Humidade:{{weather.humidity}}
            Pressão: {{weather.pressure}}
        </div>
        <div class="colors tomorrowC">
            Amanhã
            <span>{{weather.tomorrowC}}</span>
            <span>{{weather.tomorrow}}</span>
        </div>

        <div class="colors afterC">
            Depois de amanhã
            <span>{{weather.afterC}}</span>
            <span>{{weather.after}}</span>
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

</style>
