import { mount } from '@vue/test-utils'
import IconeNeve from '@/components/Icones/IconeNeve.vue'

describe('IconeNeve.vue', () => {
  it('Deve renderizar sem falhas', () => {
    const instanciaComponente = mount(IconeNeve)
    expect(instanciaComponente.exists()).toBe(true)
    expect(instanciaComponente.html()).toMatchSnapshot()
    instanciaComponente.destroy()
  })
})
