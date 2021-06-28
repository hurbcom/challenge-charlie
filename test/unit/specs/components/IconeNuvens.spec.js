import { mount } from '@vue/test-utils'
import IconeNuvens from '@/components/Icones/IconeNuvens.vue'

describe('IconeNuvens.vue', () => {
  it('Deve renderizar sem falhas', () => {
    const instanciaComponente = mount(IconeNuvens)
    expect(instanciaComponente.exists()).toBe(true)
    expect(instanciaComponente.html()).toMatchSnapshot()
    instanciaComponente.destroy()
  })
})
