import IconeBussola from '@/components/Icones/IconeBussola.vue'
import debounce from '@/utils/Debounce'
import SugestoesLocalidade from './SugestoesLocalidade/SugestoesLocalidade.vue'
import LocalizacaoUsuarioService from '@/services/LocalizacaoUsuarioService'
import OpenCageService from '@/services/OpenCageService'
import OpenWeatherCurrentDataService from '@/services/OpenWeatherCurrentDataService'
import conversorEscalaTermometricas from '@/utils/ConversorEscalaTermometricas'
import state from '@/state/state'

export default {
  name: 'localidade',

  data: () => ({
    localidades: [],
    cidadePesquisada: null,
    obtendoLocalizacaoUsuario: false,
    buscandoDadosCidade: false
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
      this.buscandoDadosCidade = true
      try {
        const dadosGeograficos = await (new OpenWeatherCurrentDataService()).obterDadosGeograficosPorCidade(cidade)
        state.dadosGeograficos = dadosGeograficos
        conversorEscalaTermometricas.atualizarStateTemperatura(dadosGeograficos.temperatura)
        this.buscandoDadosCidade = false
      } catch (error) {
        this.limparDadosState()
        this.buscandoDadosCidade = false
      }
    },

    limparDadosState () {
      state.dadosGeograficos = {}
      state.temperatura = null
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
      if (!cidade) {
        this.limparDadosState()
        return
      }

      this.obterDadosGeograficosPorCidade(cidade)
    })
  }
}
