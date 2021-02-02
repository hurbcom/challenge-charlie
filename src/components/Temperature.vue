<template>
  <p @click="changeMeasure" class="d-flex align-items-center">{{ localValue }}
    <WeatherIcon :icon="measure"/>
  </p>
</template>

<script>
import WeatherIcon from "@/components/WeatherIcon";

export default {
  name: "Temperature",
  components: {WeatherIcon},
  props: {
    value: {
      type: Number,
      default: null
    }
  },
  computed: {
    localValue() {
      if (this.measure === 'fahrenheit') {
        return ((this.value * 9 / 5) + 32).toFixed(2)
      }
      return this.value
    }
  },
  data() {
    return {
      measure: 'celsius'
    }
  },
  methods: {
    changeMeasure() {
      if (this.measure === 'celsius') {
        this.measure = 'fahrenheit'
        return
      }

      this.measure = 'celsius'
    }
  },
}
</script>

<style scoped>
p {
  font-size: 25px;
}
</style>