import { mount } from '@vue/test-utils'
import IconeEnsolarado from '@/components/Icones/IconeEnsolarado.vue'

describe('IconeEnsolarado.vue', () => {
  it('Deve renderizar sem falhas', () => {
    const instanciaComponente = mount(IconeEnsolarado)
    expect(instanciaComponente.exists()).toBe(true)
    expect(instanciaComponente.html()).toMatchSnapshot()
    instanciaComponente.destroy()
  })
})
