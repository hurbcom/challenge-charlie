<template>
  <section id="sugestoes-localidade" class="sugestoes-localidade">
    <button
      class="sugestao-localidade"
      type="button"
      v-for="(localidade, index) in localidades"
      :key="index"
      @click="selecionarLocalidade(localidade)"
    >
      {{localidade.name}}
    </button>
  </section>
</template>

<style src="./sugestoesLocalidade.scss" lang="scss"></style>
<script src="./sugestoesLocalidade.js"></script>
