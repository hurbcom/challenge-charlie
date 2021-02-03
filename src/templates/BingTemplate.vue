<template>
  <div class="min-vh-100" :style="`background-image: url(${imgUrl});background-size: cover;`">
    <router-view></router-view>
    <slot></slot>
  </div>
</template>

<script>
import {BING_URL} from "@/providers/EnvironmentProvider";
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "SimpleTemplate",
  computed: {
    ...mapGetters({
      bing: 'bing/list'
    }),
    imgUrl() {
      if (this.bing && this.bing.images && this.bing.images[0].url) {
        return `${BING_URL}${this.bing.images[0].url}`
      }
      return ''
    }
  },
  methods: {
    ...mapActions([
      'bing/loadList'
    ])
  },
  async mounted() {
    await this['bing/loadList']()
  }
}
</script>

<style lang="scss" scoped>
</style>
