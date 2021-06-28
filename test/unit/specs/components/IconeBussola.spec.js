import { mount } from '@vue/test-utils'
import IconeBussola from '@/components/Icones/IconeBussola.vue'

describe('IconeBussola.vue', () => {
  it('Deve renderizar sem falhas', () => {
    const instanciaComponente = mount(IconeBussola)
    expect(instanciaComponente.exists()).toBe(true)
    expect(instanciaComponente.html()).toMatchSnapshot()
    instanciaComponente.destroy()
  })
})
