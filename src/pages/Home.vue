<template>
  <div class="d-flex vh-100 justify-content-center align-items-center">
    <b-card
      body-class="p-0" no-body
      :class="{
        'card-cold': today[0].temp < 15,
        'card-normal': today[0].temp >= 15 && today[0].temp <= 35,
        'card-hot': today[0].temp > 35
      }"
    >
      <b-card-header class="d-flex align-items-center">
        <WeatherIcon icon="(" size="20" class="mr-3"/>
        <InputLocation/>
      </b-card-header>
      <div class="weather row ml-0 mr-0">
        <div class="col-md-6 d-flex align-items-center justify-content-center">
          <WeatherIcon :icon="today[0].icon" size="100"/>
        </div>
        <div class="col-md-6">
          <h3 class="mb-0">HOJE</h3>
          <Temperature :value="today[0].temp"/>
          <p class="text-capitalize">{{ today[0].description }}</p>
          <p>
            Vento: {{ today[0].wind }}<br/>
            Humidade: {{ today[0].humidity }}<br/>
            Pressão: {{ today[0].pressure }}<br/>
          </p>
        </div>
      </div>
      <div class="weather row ml-0 mr-0">
        <div class="col-md-6">
          <b-button v-b-toggle.collapse-tomorrow variant="link">Detalhado</b-button>
          <b-collapse id="collapse-tomorrow" class="mt-2">
            <b-table :fields="fields" :items="tomorrow">
              <template v-slot:cell(time)="{item}">{{ item.time | onlyTime }}</template>
            </b-table>
          </b-collapse>
        </div>
        <div class="col-md-6">
          <h3 class="mb-0">AMANHÃ</h3>
          <Temperature :value="tomorrow[0].temp"/>
        </div>
      </div>
      <div class="weather row ml-0 mr-0">
        <div class="col-md-6">
          <b-button v-b-toggle.collapse-aftertomorrow variant="link">Detalhado</b-button>
          <b-collapse id="collapse-aftertomorrow" class="mt-2">
            <b-table :fields="fields" :items="afterTomorrow">
              <template v-slot:cell(time)="{item}">{{ item.time | onlyTime }}</template>
            </b-table>
          </b-collapse>
        </div>
        <div class="col-md-6">
          <h4 class="mb-0">DEPOIS DE AMANHÃ</h4>
          <Temperature :value="afterTomorrow[0].temp"/>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import WeatherIcon from "@/components/WeatherIcon";
import {mapActions, mapGetters} from 'vuex';
import moment from "moment";
import Temperature from "@/components/Temperature";
import InputLocation from "@/components/InputLocation";

export default {
  name: "HomePage",
  components: {InputLocation, Temperature, WeatherIcon},
  computed: {
    ...mapGetters({
      location: 'openCage/list',
      weather: 'openWeather/list',
      weatherCurrent: 'openWeather/current'
    }),
    today() {
      const REFERENCE = moment();
      const TODAY = REFERENCE.clone().startOf('day');
      if (this.weather && this.weather.list) {
        const arrayTODAY = this.weather.list
          .filter(temp => {
            const GIVEN_DAY = moment(temp.dt_txt)
            if (GIVEN_DAY.isSame(TODAY, 'd')) {
              return true
            }
          }).map(temp => {
            return {
              time: moment(temp.dt_txt),
              feelsLike: temp.main.feels_like,
              temp: temp.main.temp,
              min: temp.main.temp_min,
              max: temp.main.temp_max,
              description: temp.weather[0].description,
              icon: temp.weather[0].icon,

              wind: `${temp.wind.speed} km/h`,
              humidity: `${temp.main.humidity} %`,
              pressure: `${temp.main.pressure}hPA`
            }
          })

        if (arrayTODAY.length === 0) {
          return [this.objReference]
        }

        return arrayTODAY
      }
      return [this.objReference]
    },
    tomorrow() {
      const REFERENCE = moment();
      const TOMORROW = REFERENCE.clone().add(1, 'days').startOf('day');
      if (this.weather && this.weather.list) {
        return this.weather.list
          .filter(temp => {
            const GIVEN_DAY = moment(temp.dt_txt)
            if (GIVEN_DAY.isSame(TOMORROW, 'd')) {
              return true
            }
          }).map(temp => {
            return {
              time: moment(temp.dt_txt),
              feelsLike: temp.main.feels_like,
              temp: temp.main.temp,
              min: temp.main.temp_min,
              max: temp.main.temp_max,
              description: temp.weather[0].description,
              icon: temp.weather[0].icon
            }
          })
      }
      return [this.objReference]
    },
    afterTomorrow() {
      const REFERENCE = moment();
      const AFTER_TOMORROW = REFERENCE.clone().add(2, 'days').startOf('day');
      if (this.weather && this.weather.list) {
        return this.weather.list
          .filter(temp => {
            const GIVEN_DAY = moment(temp.dt_txt)
            if (GIVEN_DAY.isSame(AFTER_TOMORROW, 'd')) {
              return true
            }
          }).map(temp => {
            return {
              time: moment(temp.dt_txt),
              feelsLike: temp.main.feels_like,
              temp: temp.main.temp,
              min: temp.main.temp_min,
              max: temp.main.temp_max,
              description: temp.weather[0].description,
              icon: temp.weather[0].icon
            }
          })
      }
      return [this.objReference]
    }
  },
  data() {
    return {
      fields: [
        {key: 'min', label: 'Mínima'},
        {key: 'max', label: 'Máxima'},
        {key: 'time', label: 'Horário'}
      ],
      objReference: {
        time: null,
        feelsLike: null,
        temp: null,
        min: null,
        max: null,
        description: null,
        icon: null,

        wind: null,
        humidity: null,
        pressure: null
      }
    }
  },
  methods: {
    ...mapActions([
      'openWeather/loadCurrent'
    ])
  }
}
</script>

<style lang="scss" scoped>
.card-header {
  background-color: rgba(255, 255, 255, 1);
  color: #898788;
  font-weight: bold;
}

.card-cold {
  color: white;

  .weather:nth-child(2) {
    background-color: hsla(212, 100%, 50%, 0.9);
  }

  .weather:nth-child(3) {
    background-color: hsla(212, 100%, 55%, 0.8);
  }

  .weather:nth-child(4) {
    background-color: hsla(212, 100%, 60%, 0.7);
  }
}

.card-normal {
  color: white;
  background-color: transparent;

  .weather:nth-child(2) {
    background-color: hsla(50, 100%, 55%, 0.9);
  }

  .weather:nth-child(3) {
    background-color: hsla(50, 100%, 65%, 0.8);
  }

  .weather:nth-child(4) {
    background-color: hsla(50, 100%, 70%, 0.7);
  }
}

.card-hot {
  color: white;

  .weather:nth-child(2) {
    background-color: hsla(354, 100%, 45%, 0.9);
  }

  .weather:nth-child(3) {
    background-color: hsla(354, 100%, 55%, 0.8);
  }

  .weather:nth-child(4) {
    background-color: hsla(354, 100%, 60%, 0.7);
  }
}

</style>
