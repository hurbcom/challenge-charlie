<template>
  <span class="meteocons" :data-icon="iconTranslate" :style="`font-size:${size}px;line-height:30px;`"/>
</template>

<script>
export default {
  name: "WeatherIcon",
  props: {
    icon: {
      type: String
    },
    size: {
      type: String,
      default: '50'
    }
  },
  computed: {
    iconTranslate() {
      switch (this.icon) {

        case '01d':
        case '01n':
          return 'B'
        // break;

        case '02d':
        case '02n':
          return 'H'
        // break;

        case '03d':
        case '03n':
          return 'N'
        // break;

        case '04d':
        case '04n':
          return 'Y'
        // break;

        case '09d':
        case '09n':
          return '8'
        // break;

        case '10d':
        case '10n':
          return '3'
        // break;

        case '11d':
        case '11n':
          return '0'
        // break;

        case '13d':
        case '13n':
          return 'G'
        // break;

        case '50d':
        case '50n':
          return 'M'
        // break;

        case 'celsius':
          return '*'
        // break;

        case 'fahrenheit':
          return '+'
        // break;

        case '(':
          return '('
        // break;

        default:
          return ')'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.meteocons:before {
  font-family: 'MeteoconsRegular';
  content: attr(data-icon);
}
</style>
