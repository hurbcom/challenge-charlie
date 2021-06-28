import { mount } from '@vue/test-utils'
import IconeTrovoadas from '@/components/Icones/IconeTrovoadas.vue'

describe('IconeTermometro.vue', () => {
  it('Deve renderizar sem falhas', () => {
    const instanciaComponente = mount(IconeTrovoadas)
    expect(instanciaComponente.exists()).toBe(true)
    expect(instanciaComponente.html()).toMatchSnapshot()
    instanciaComponente.destroy()
  })
})
