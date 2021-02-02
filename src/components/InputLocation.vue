<template>
  <div>
    <b-input v-model="location_input" @change="changeInput" class="border-0 bg-transparent"/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import moment from "moment";

export default {
  name: "InputLocation",
  computed: {
    ...mapGetters({
      locationCage: 'openCage/list',
      weather: 'openWeather/list',
      weatherCurrent: 'openWeather/current'
    }),
  },
  data() {
    return {
      location: null,
      location_input: null
    }
  },
  methods: {
    ...mapActions([
      'openCage/loadList',
      'openWeather/loadList',
      'openWeather/loadCurrent'
    ]),
    async changeInput() {
      if (this.location_input.length >= 3) {
        // alert(this.location_input)
        await this['openCage/loadList']({
          q: `${this.location_input}`,
          pretty: 1,
          no_annotations: 1
        })

        this.prepareLocation()
        await this.loadWeather()
      }
    },
    prepareLocation() {
      this.location = this.locationCage.results
        .find(r => r.components.city && r.components.state && r.components.country_code)

      if (!this.location) {
        this.$snotify.error('Não foi possível encontrar a localidade informada!')
        return
      }

      this.location_input = this.location.components.city
    },
    async loadWeather() {
      this.$store.commit('openWeather/setCurrent', {})
      await this['openWeather/loadList']({
        q: `${this.location.components.city},${this.location.components.state},${this.location.components.country_code}`
      })

      const todaysWeather = this.weather.list
        .filter(temp => {
          const GIVEN_DAY = moment(temp.dt_txt)
          if (GIVEN_DAY.isSame(moment().startOf('day'), 'd')) { return true }
        })

      if (
        todaysWeather.length === 0 &&
        Object.keys(this.weatherCurrent).length === 0 && this.weatherCurrent.constructor === Object // Check Empty Object
      ) {
        await this['openWeather/loadCurrent']({id: this.weather.city.id})
        this.$store.commit('openWeather/setList', {
          ...this.weather,
          list: [
            {
              dt_txt: moment().format(),
              ...this.weatherCurrent
            },
            ...this.weather.list
          ]
        }, {root: true})
      }
    }
  },
  async mounted() {
    window.navigator.geolocation.getCurrentPosition(async GeoLocationPostion => {
      await this['openCage/loadList']({
        q: `${GeoLocationPostion.coords.latitude}+${GeoLocationPostion.coords.longitude}`,
        pretty: 1,
        no_annotations: 1
      })

      this.prepareLocation()

      await this.loadWeather()

    }, console.error);
  }
}
</script>

<style scoped>

</style>