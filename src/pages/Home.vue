<template>
  <div class="d-flex vh-100 justify-content-center align-items-center">
    <b-card body-class="p-0">
      <b-card-header>
        <WeatherIcon icon="("/>
        Rio De Janeiro, Rio De Janeiro
      </b-card-header>
    </b-card>
  </div>
</template>

<script>
import WeatherIcon from "@/components/WeatherIcon";
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "HomePage",
  components: {WeatherIcon},
  computed: {
    ...mapGetters({
      location: 'openCage/list',
      weather: 'openWeather/list'
    })
  },
  methods: {
    ...mapActions([
      'openCage/loadList',
      'openWeather/loadList'
    ])
  },
  async mounted() {
    window.navigator.geolocation.getCurrentPosition(async GeoLocationPostion => {
      await this['openCage/loadList']({
        q: `${GeoLocationPostion.coords.latitude}+${GeoLocationPostion.coords.longitude}`,
        pretty: 1,
        no_annotations: 1
      })

      if (this.location && this.location.results.length > 0) {
        const userLocation = this.location.results[0]

        await this['openWeather/loadList']({
          q: `${userLocation.components.city},${userLocation.components.state_code},${userLocation.components.country_code}`
        })
        console.log(this.weather)
      }
    }, console.error);
  }
}
</script>

<style lang="scss" scoped>
.card-header {
  color: #898788;
  font-weight: bold;
}

.card-cold {
  color: white;

  .weather:nth-child(1) {
    background-color: hsla(212, 83%, 49%, 0.7);
  }

  .weather:nth-child(1) {
    background-color: hsla(212, 97%, 50%, 0.8);
  }

  .weather:nth-child(1) {
    background-color: hsla(213, 97%, 36%, 0.9);
  }
}

.card-normal {
  color: white;

  .weather:nth-child(1) {
    background-color: hsla(48, 83%, 49%, 0.7);
  }

  .weather:nth-child(1) {
    background-color: hsla(48, 97%, 50%, 0.8);
  }

  .weather:nth-child(1) {
    background-color: hsla(49, 97%, 36%, 0.9);
  }
}

.card-hot {
  color: white;

  .weather:nth-child(1) {
    background-color: hsla(354, 83%, 49%, 0.7);
  }

  .weather:nth-child(1) {
    background-color: hsla(354, 97%, 50%, 0.8);
  }

  .weather:nth-child(1) {
    background-color: hsla(355, 97%, 36%, 0.9);
  }
}

</style>
