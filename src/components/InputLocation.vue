<template>
  <div class="w-100">
    <b-input
      v-model="location_input"
      @keyup="searchLocations"
      @change="loadWeather"
      :placeholder="placeholder"
      class="border-0 bg-transparent w-100"
      list="my-list-id"
    />

    <datalist v-if="locationCage.results" id="my-list-id">
      <option :key="index" v-for="(location, index) in locationCage.results">
        {{ `${location.formatted}` }}
      </option>
    </datalist>
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
    placeholder() {
      if (this.location.components.city) {
        return `${this.location.components.city}, ${this.location.components.state}, ${this.location.components.country_code.toUpperCase()}`
      }
      return `${this.location.components.state}, ${this.location.components.country_code.toUpperCase()}`
  }

  },
  data() {
    return {
      timeout: null,
      location_input: null,
      location: {
        components: {
          city: null,
          state: null,
          country_code: ''
        }
      },
    }
  },
  methods: {
    ...mapActions([
      'openCage/loadList',
      'openWeather/loadList',
      'openWeather/loadCurrent'
    ]),
    async searchLocations(evt) {
      clearTimeout(this.timeout);

      this.timeout = setTimeout(async () => {

        if (evt.target.value.length >= 3) {
          await this['openCage/loadList']({
            q: `${evt.target.value}`,
            pretty: 1,
            no_annotations: 1
          })

          const FILTERED = {
            ...this.locationCage,
            results: this.locationCage.results.filter(r => r.components.state && r.components.country_code)
          }
          this.$store.commit('openCage/setList', FILTERED, {root: true})
          this.$forceUpdate()
        }

      }, 800);
    },
    async loadWeather() {
      this.$store.commit('openWeather/setList', [], {root: true})
      this.$store.commit('openWeather/setCurrent', {}, {root: true})

      this.location = this.locationCage.results.find(r => r.formatted === this.location_input)

      if (!this.location){
        this.$snotify.error('Não foi possível encontrar a Localização!')
        this.location = {
          components: {
            city: null,
            state: null,
            country_code: ''
          }
        }
        return
      }

      try {
        const query = this.location.components.city ?
          `${this.location.components.city},${this.location.components.state},${this.location.components.country_code}` :
          `${this.location.components.state},${this.location.components.country_code}`

        await this['openWeather/loadList']({q: query})

        this.$store.commit('openCage/setList', [], {root: true})

        const todaysWeather = this.weather.list
          .filter(temp => {
            const GIVEN_DAY = moment(temp.dt_txt)
            if (GIVEN_DAY.isSame(moment().startOf('day'), 'd')) {
              return true
            }
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

        if (!this.weather.list || this.weather.list.length === 0) {
          this.$snotify.error('Não foi possível encontrar previsão para esta Localização!')
        }

        this.location_input = null
      }catch (e) {
        this.$snotify.error('Error ao procurar previsão para esta Localização!')
        console.error(e)
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

      const location = this.locationCage.results.find(r => r.components.city && r.components.state && r.components.country_code)
      this.location_input = `${location.formatted}`
      await this.loadWeather()

    }, console.error);
  }
}
</script>

<style scoped>

</style>