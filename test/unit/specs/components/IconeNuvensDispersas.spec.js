import { mount } from '@vue/test-utils'
import IconeNuvensDispersas from '@/components/Icones/IconeNuvensDispersas.vue'

describe('IconeNuvensDispersas.vue', () => {
  it('Deve renderizar sem falhas', () => {
    const instanciaComponente = mount(IconeNuvensDispersas)
    expect(instanciaComponente.exists()).toBe(true)
    expect(instanciaComponente.html()).toMatchSnapshot()
    instanciaComponente.destroy()
  })
})
