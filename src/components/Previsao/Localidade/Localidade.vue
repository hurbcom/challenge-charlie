<template>
    <section id="localidade" class="localidade" :class="{'carregando': buscandoDadosCidade}">
        <span @click="obterLocalizacaoUsuario"><IconeBussola class="botao-selecionar-localidade" :class="{ 'carregando': obtendoLocalizacaoUsuario }" /></span>
        <input type="text" v-model="cidadePesquisada" :placeholder="placeholder" />
    </section>
</template>

<style src="./localidade.scss" lang="scss"></style>
<script src="./localidade.js"></script>
