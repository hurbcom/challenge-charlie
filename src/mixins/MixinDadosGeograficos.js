import state from '@/state/state'
import conversorEscalaTermometricas from '../utils/ConversorEscalaTermometricas'

export default {
  computed: {
    escalaTemperatura () {
      return state.escalaTemperatura
    },

    dadosGeograficos () {
      return state.dadosGeograficos
    },

    temperatura () {
      return state.temperatura
    }
  },

  methods: {
    mudarEscalaTemperatura () {
      conversorEscalaTermometricas.mudarEscalaTermometrica()
    }
  }
}
