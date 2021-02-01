<template>
  <span class="meteocons" :data-icon="icon"/>
</template>

<script>
export default {
  name: "WeatherIcon",
  props: {
    icon: {
      type: String,
      default: ')'
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
