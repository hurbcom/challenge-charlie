<template>
    <div class="wrapper-weather-container">
        <div
            class="d-flex weather-row"
            :class="[
                {'today': today},
                backgroundColorProps
            ]"
        >
            <div class="icon icon-weather">
                <span
                    class="icon"
                    :class="{ 'hide': !today }"
                    :data-icon="generateIcon(weather.description)"
                >
                </span>
            </div>

            <div class="details-weather d-flex flex-column">
                <p class="date">{{ title }}</p>
                <p
                    class="temperature"
                    v-if="showCelsius"
                    @click="toggleTemperature('F')"
                >
                    {{ weather.tempC }}ºC
                </p>
                <p
                    class="temperature"
                    v-else
                    @click="toggleTemperature('C')"
                >
                    {{ weather.tempF }}ºF
                </p>

                <div :class="{ 'hide': !today }">
                    <p class="state">{{ weather.description }}</p>

                    <p class="wind">Vento: {{ weather.wind }}</p>
                    <p class="humidty">Humidade: {{ weather.humidity }}</p>
                    <p class="pressure">Pressão: {{ weather.pressure }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import temperature from './../constants/temperature';
import temperatureIcons from './../constants/temperatureIcons';

export default {
    name: 'Weather',
    props: {
        weather: {
            type: Object,
            required: true,
            default: () => ({
                tempC: '',
                tempF: '',
                description: '',
                pressure: '',
                humidity: '',
                wind: '',
            }),
        },
        title: {
            type: String,
            required: true,
            default: '',
        },
        showCelsius: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    computed: {
        today() {
            return this.title === 'Hoje';
        },
        backgroundColorProps() {
            let color = 'gray';

            if (this.weather.tempC === null) {
                return this.generateColorTones(color);
            }

            if (this.weather.tempC <= temperature.LOWER) {
                color = 'blue';
            } else  if (this.weather.tempC > temperature.LOWER && this.weather.tempC < temperature.HIGHER) {
                color = 'yellow';
            } else if (this.weather.tempC >= temperature.HIGHER) {
                color = 'red';
            }

            return this.generateColorTones(color);
        },
    },
    methods: {
        generateColorTones(color) {
            const tones = [1, 2 , 3, 4];
            const tone = tones[Math.floor(Math.random() * tones.length)];
            return `${color} tone-${tone}`;
        },
        toggleTemperature(type) {
            this.$emit('changeTemperatureType', type);
        },
        generateIcon(temperatureDescription) {
            let icon = ')';

            Object.keys(temperatureIcons).forEach(temperatureLabel => {
                if (temperatureDescription.includes(temperatureLabel)) {
                    icon = temperatureIcons[temperatureLabel];
                }
            })

            return icon;
        },
    },
}
</script>

<style lang="scss" scoped>
    .wrapper-weather-container {
        .hide {
            display: none;
        }

        .weather-row {
            padding: 10px 0 20px 0;
            height: 20vh;

            &.today {
                height: 45vh;
            }

            &.gray {
                &.tone-1 { background-color: rgba(211, 211, 211, 0.9); }
                &.tone-2 { background-color: rgba(201, 201, 201, 0.9); }
                &.tone-3 { background-color: rgba(148, 148, 148, 0.9); }
                &.tone-4 { background-color: rgba(124, 124, 124, 0.9); }
            }

            &.yellow {
                &.tone-1 { background-color: rgba(255, 255, 0, .9); }
                &.tone-2 { background-color: rgba(216, 216, 0, .9); }
                &.tone-3 { background-color: rgba(178, 178, 0, .9); }
                &.tone-4 { background-color: rgba(140, 140, 0, .9); }
            }

            &.red {
                &.tone-1 { background-color: rgba(255, 0, 0, .9); }
                &.tone-2 { background-color: rgba(216, 0, 0, .9); }
                &.tone-3 { background-color: rgba(178, 0, 0, .9); }
                &.tone-4 { background-color: rgba(140, 0, 0, .9); }
            }

            &.blue {
                &.tone-1 { background-color: rgba(0, 192, 255, .9); }
                &.tone-2 { background-color: rgba(0, 172, 255, .9); }
                &.tone-3 { background-color: rgba(0, 113, 216, .9); }
                &.tone-4 { background-color: rgba(0, 73, 140, .9); }
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

                &.temperature {
                    cursor: pointer;
                }

                &.date {
                    text-transform: uppercase;
                }

                &.state {
                    padding: 15px 0 20px;
                    text-transform: capitalize;
                }

                &.wind,
                &.humidty,
                &.pressure {
                    font-size: 1rem;
                }
            }
        }
    }
</style>