import { mount } from '@vue/test-utils'
import IconeSolChuva from '@/components/Icones/IconeSolChuva.vue'

describe('IconeSolChuva.vue', () => {
  it('Deve renderizar sem falhas', () => {
    const instanciaComponente = mount(IconeSolChuva)
    expect(instanciaComponente.exists()).toBe(true)
    expect(instanciaComponente.html()).toMatchSnapshot()
    instanciaComponente.destroy()
  })
})
