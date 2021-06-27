export default {
  name: 'sugestoes-localidade',
  props: ['localidades'],

  methods: {
    selecionarLocalidade (localidade) {
      this.$emit('selecionar', localidade)
    }
  }
}
