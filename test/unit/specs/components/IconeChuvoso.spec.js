import { mount } from '@vue/test-utils'
import IconeChuvoso from '@/components/Icones/IconeChuvoso.vue'

describe('IconeChuvoso.vue', () => {
  it('Deve renderizar sem falhas', () => {
    const instanciaComponente = mount(IconeChuvoso)
    expect(instanciaComponente.exists()).toBe(true)
    expect(instanciaComponente.html()).toMatchSnapshot()
    instanciaComponente.destroy()
  })
})
