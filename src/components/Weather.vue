<template>
    <main class="content">
        <h1 class="colors"><span class="icon-font">( </span>{{weather.city}}, {{weather.region}}</h1>
        <div class="colors todayC">
            <span class="icon-font">
                {{weather.condition | iconWeather}}
            </span>

            <span>{{weather.todayC}}<span class="icon-font">*</span></span><span>{{weather.today}}<span class="icon-font">+</span></span>
            {{weather.condition | translate}}
            Vento:{{weather.windDirection}} {{weather.windSpeed}} km/h
            Humidade:{{weather.humidity}} %
            Pressão: {{weather.pressure}} hPA
        </div>
        <div class="colors tomorrowC">
            Amanhã
            <span>{{weather.tomorrowC}}<span class="icon-font">*</span></span>
            <span>{{weather.tomorrow}}<span class="icon-font">+</span></span>
        </div>

        <div class="colors afterC">
            Depois de amanhã
            <span>{{weather.afterC}}<span class="icon-font">*</span></span>
            <span>{{weather.after}}<span class="icon-font">+</span></span>
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

.background-red {
    background-color: #d01e1ead;
}

.tomorrowC.background-red {
    background-color: #d01e1ecf;
}

.afterC.background-red {
    background-color: #d01e1ee8;
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
