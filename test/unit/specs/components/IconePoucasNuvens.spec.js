import { mount } from '@vue/test-utils'
import IconePoucasNuvens from '@/components/Icones/IconePoucasNuvens.vue'

describe('IconePoucasNuvens.vue', () => {
  it('Deve renderizar sem falhas', () => {
    const instanciaComponente = mount(IconePoucasNuvens)
    expect(instanciaComponente.exists()).toBe(true)
    expect(instanciaComponente.html()).toMatchSnapshot()
    instanciaComponente.destroy()
  })
})
