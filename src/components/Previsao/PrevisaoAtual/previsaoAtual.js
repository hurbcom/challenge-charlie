import IconeTermometro from '@/components/Icones/IconeTermometro.vue'
import MixinDadosGeograficos from '@/mixins/MixinDadosGeograficos'

export default {
  name: 'previsao-atual',
  mixins: [MixinDadosGeograficos],
  components: {
    IconeTermometro
  }
}
