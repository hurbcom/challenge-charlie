<template>
    <div class="first-day">
        <h2 class="first-day__title">HOJE</h2>
        <div class="first-day__content">
            {{temp ? temp : "N/A"}}
            <div class="first-day__degree" v-show="temp">
                <p :class="{inactive: unit == 'F'}"
                   class="first-day__degree--celsius" 
                   @click="getClimate(lat, long, 'c')">ºC</p>
                <p :class="{inactive: unit == 'C'}"
                   class="first-day__degree--fahreheint" 
                   @click="getClimate(lat, long, 'f')">ºF</p>
            </div>
        </div>
        <p class="first-day__climate">{{ condition | translate }}</p>
        <div class="first-day__contentclimate">
            <p>Vento: {{wind ? wind : "N/A"}}</p>
            <p>Humidade: {{humidity ? humidity : "N/A"}}</p>
            <p>Pressão: {{pressure ? pressure : "N/A"}}</p>
        </div>
    </div>
    
</template>

<script>
    import api from "@/services/api.js";

    export default {
        name: "ForecastToday",
        props: ['lat',
                'long',
                'temp',
                'unit',
                'condition',
                'wind',
                'humidity',
                'pressure'],
        methods: {
            getClimate(lat, long, unit) {
                return api.getClimate(lat, long, unit)
                    .then(weather => {
                        this.$store.commit("SET_WEATHER", weather);
                    })
                    .catch();
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "@/styles/placeholders/placeholders.scss";

    .first-day {
        .first-day__title {
            @extend %day;
        }
        .first-day__content {
            @extend %temperature;
        }
        .first-day__degree {
            @extend %degree;
            .first-day__degree--fahreheint {
                @extend %fahreheint;
            }
            .first-day__degree--inactive {
                @extend %inactive;
            }
        }
        .first-day__climate {
            @extend %climate;
        }
        .first-day__contentclimate {
            @extend %content-climate;
        }
        .inactive {
            @extend %inactive;
        }
    }


</style>