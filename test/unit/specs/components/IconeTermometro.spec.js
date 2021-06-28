import { mount } from '@vue/test-utils'
import IconeTermometro from '@/components/Icones/IconeTermometro.vue'

describe('IconeTermometro.vue', () => {
  it('Deve renderizar sem falhas', () => {
    const instanciaComponente = mount(IconeTermometro)
    expect(instanciaComponente.exists()).toBe(true)
    expect(instanciaComponente.html()).toMatchSnapshot()
    instanciaComponente.destroy()
  })
})
