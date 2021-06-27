<template>
    <section id="previsao" class="previsao">
        <Localidade @change="atualizarDadosGeograficos"/>
        <template v-if="dadosGeograficos">
          <PrevisaoAtual />
          <PrevisaoFutura />
          <PrevisaoFutura class="background-secundario" />
        </template>
        <SemLocalizacao v-else/>
    </section>
</template>

<style src="./previsao.scss" lang="scss"></style>
<script src="./previsao.js"></script>
