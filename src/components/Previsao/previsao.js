import Localidade from '@/components/Previsao/Localidade/Localidade.vue'
import PrevisaoAtual from '@/components/Previsao/PrevisaoAtual/PrevisaoAtual.vue'
import PrevisaoFutura from '@/components/Previsao/PrevisaoFutura/PrevisaoFutura.vue'
import SemLocalizacao from '@/components/Previsao/SemLocalizacao/SemLocalizacao.vue'

export default {
  name: 'previsao',

  data: () => ({
    dadosGeograficos: null
  }),

  components: {
    Localidade,
    PrevisaoAtual,
    PrevisaoFutura,
    SemLocalizacao
  },

  methods: {
    atualizarDadosGeograficos (dadosGeograficos) {
      this.dadosGeograficos = dadosGeograficos
    }
  }
}
