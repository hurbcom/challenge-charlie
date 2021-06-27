import { mount } from '@vue/test-utils'
import SemLocalizacao from '@/components/Previsao/SemLocalizacao/SemLocalizacao.vue'

describe('SemLocalizacao.vue', () => {
  it('Deve renderizar sem falha', () => {
    const instanciaComponente = mount(SemLocalizacao)
    expect(instanciaComponente.exists()).toBe(true)
    expect(instanciaComponente.html()).toMatchSnapshot()
    instanciaComponente.destroy()
  })
})
