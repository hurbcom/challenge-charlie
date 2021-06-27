import IconeBussola from '@/components/Icones/IconeBussola.vue'
import debounce from '@/utils/Debounce'
import SugestoesLocalidade from './SugestoesLocalidade/SugestoesLocalidade.vue'
import LocalizacaoUsuarioService from '@/services/LocalizacaoUsuarioService'
import OpenCageService from '@/services/OpenCageService'
import OpenWeatherCurrentDataService from '../../../services/OpenWeatherCurrentDataService'

export default {
  name: 'localidade',

  data: () => ({
    localidades: [],
    cidadePesquisada: null,
    obtendoLocalizacaoUsuario: false
  }),

  components: {
    IconeBussola,
    SugestoesLocalidade
  },

  computed: {
    placeholder () {
      if (!this.obtendoLocalizacaoUsuario) {
        return 'Informe uma cidade'
      }

      return 'Obtendo localização...'
    }
  },

  methods: {
    async obterDadosGeograficosPorCidade (cidade) {
      try {
        const dadosGeograficos = await (new OpenWeatherCurrentDataService()).obterDadosGeograficosPorCidade(cidade)
        this.$emit('change', dadosGeograficos)
      } catch (error) {
        this.$emit('change', null)
      }
    },

    selecionarLocalidade (localidade) {
      this.cidadePesquisada = localidade.name
      this.localidade = []
    },

    async obterLocalizacaoUsuario () {
      if (this.obtendoLocalizacaoUsuario) {
        return
      }

      this.obtendoLocalizacaoUsuario = true
      try {
        const { latitude, longitude } = await (new LocalizacaoUsuarioService()).obterLocalizacaoUsuario()
        const cidade = await (new OpenCageService()).obterCidadePorLatitudeLongitude(latitude, longitude)
        this.cidadePesquisada = cidade
        this.obtendoLocalizacaoUsuario = false
      } catch (error) {
        this.obtendoLocalizacaoUsuario = false
        window.alert('Você deve permitir acesso a sua localização')
      }
    }
  },

  watch: {
    cidadePesquisada: debounce(function (cidade) {
      this.obterDadosGeograficosPorCidade(cidade)
    })
  }
}
