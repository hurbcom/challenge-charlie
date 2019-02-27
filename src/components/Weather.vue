<template>
    <div id="content">
        {{weather.condition}}
        <span class="icon-font">
            {{weather.condition | iconWeather}}
        </span>
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

<style >
.icon-font {
    font-family: 'MeteoconsRegular';
    font-size: 80px;
}
.icon-font:before {
    content: attr(H);
}
</style>
