import state from '@/state/state'

class ConversorEscalaTermometricas {
  constructor () {
    this.CELCIUS = 'C'
    this.FAHRENHEIT = 'F'
    this.escalaTermometricaSelecionada = this.CELCIUS
    this.atualizarStateEscalaTemperatura()
  }

  ehEscalaCelciusSelecionada () {
    return this.escalaTermometricaSelecionada === this.CELCIUS
  }

  obterTemperatura (valorFahrenheit) {
    if (this.ehEscalaCelciusSelecionada()) {
      return this.converterFahrenheitParaCelcius(valorFahrenheit)
    }

    return valorFahrenheit
  }

  converterFahrenheitParaCelcius (valorFahrenheit) {
    const PONTO_FUSAO_ESCALA_FAHRENHEIT = 32
    const DIFERENCA_PONTO_FUSAO_EBULICAO_ESCALA_FAHRENHEIT = 1.8
    return ((valorFahrenheit - PONTO_FUSAO_ESCALA_FAHRENHEIT) / DIFERENCA_PONTO_FUSAO_EBULICAO_ESCALA_FAHRENHEIT).toFixed(1)
  }

  mudarEscalaTermometrica () {
    this.escalaTermometricaSelecionada =
      this.ehEscalaCelciusSelecionada() ? this.FAHRENHEIT : this.CELCIUS

    this.atualizarStateEscalaTemperatura()
    this.atualizarStateTemperatura()
  }

  atualizarStateEscalaTemperatura () {
    state.escalaTemperatura = this.escalaTermometricaSelecionada
  }

  atualizarStateTemperatura () {
    state.temperatura = this.obterTemperatura(state.dadosGeograficos.temperatura)
  }
}

const conversorEscalaTermometricas = new ConversorEscalaTermometricas()
export default conversorEscalaTermometricas
