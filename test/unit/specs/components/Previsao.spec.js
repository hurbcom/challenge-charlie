import { mount } from '@vue/test-utils'
import Previsao from '@/components/Previsao/Previsao.vue'
import SemLocalizacao from '@/components/Previsao/SemLocalizacao/SemLocalizacao.vue'
import PrevisaoAtual from '@/components/Previsao/PrevisaoAtual/PrevisaoAtual.vue'
import PrevisaoFutura from '@/components/Previsao/PrevisaoFutura/PrevisaoFutura.vue'

describe('Previsao.vue', () => {
  let instanciaComponente

  beforeEach(() => {
    instanciaComponente = mount(Previsao)
  })

  afterEach(() => {
    instanciaComponente.destroy()
  })

  it('Deve renderizar sem falhas', () => {
    expect(instanciaComponente.html()).toMatchSnapshot()
  })

  it('Deve renderizar componente Sem Localizacao', () => {
    const componeteSemLocalizacao = instanciaComponente.findComponent(SemLocalizacao)

    expect(instanciaComponente.vm.dadosGeograficos).toBe(null)
    expect(componeteSemLocalizacao.exists()).toBe(true)
  })

  it('Deve renderizar previsão atual e futura quando tiver dados Geograficos', async () => {
    await instanciaComponente.setData({
      dadosGeograficos: {}
    })

    const componentePrevisaoAtual = instanciaComponente.findComponent(PrevisaoAtual)
    const componentePrevisaoFutura = instanciaComponente.findComponent(PrevisaoFutura)
    const componenteSemLocalizacao = instanciaComponente.findComponent(SemLocalizacao)

    expect(componenteSemLocalizacao.exists()).toBe(false)
    expect(componentePrevisaoAtual.exists()).toBe(true)
    expect(componentePrevisaoFutura.exists()).toBe(true)
  })
})
