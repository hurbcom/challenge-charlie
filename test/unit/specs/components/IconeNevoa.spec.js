import { mount } from '@vue/test-utils'
import IconeNevoa from '@/components/Icones/IconeNevoa.vue'

describe('IconeNevoa.vue', () => {
  it('Deve renderizar sem falhas', () => {
    const instanciaComponente = mount(IconeNevoa)
    expect(instanciaComponente.exists()).toBe(true)
    expect(instanciaComponente.html()).toMatchSnapshot()
    instanciaComponente.destroy()
  })
})
