import BingService from '@/services/BingService'

export default {
  name: 'App',

  data: () => ({
    urlImagemBackground: null,
    style: null
  }),

  async created () {
    this.urlImagemBackground = await (new BingService()).obterUrlImagemAleatoria()
    this.style = `background-image: url(${this.urlImagemBackground})`
  }
}
