import Localidade from '@/components/Previsao/Localidade/Localidade.vue'
import PrevisaoAtual from '@/components/Previsao/PrevisaoAtual/PrevisaoAtual.vue'
import PrevisaoFutura from '@/components/Previsao/PrevisaoFutura/PrevisaoFutura.vue'
import SemLocalizacao from '@/components/Previsao/SemLocalizacao/SemLocalizacao.vue'
import ConversorEscalaTermometricas from '@/utils/ConversorEscalaTermometricas'
import MixinDadosGeograficos from '@/mixins/MixinDadosGeograficos'

export default {
  name: 'previsao',
  mixins: [MixinDadosGeograficos],

  components: {
    Localidade,
    PrevisaoAtual,
    PrevisaoFutura,
    SemLocalizacao
  },

  computed: {
    temperaturaGrausCelcius () {
      if (!this.dadosGeograficos) {
        return null
      }

      return ConversorEscalaTermometricas
        .converterFahrenheitParaCelcius(this.dadosGeograficos.temperatura)
    },

    ehTempoFrio () {
      const TEMPERATURA_EM_GRAUS_CELCIUS = 15
      return this.temperaturaGrausCelcius < TEMPERATURA_EM_GRAUS_CELCIUS
    },

    ehTempoQuente () {
      const TEMPERATURA_EM_GRAUS_CELCIUS = 35
      return this.temperaturaGrausCelcius > TEMPERATURA_EM_GRAUS_CELCIUS
    },

    semLocalizacao () {
      return this.dadosGeograficos && Object.keys(this.dadosGeograficos).length === 0
    }
  }
}
