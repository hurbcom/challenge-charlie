<template>
    <section id="previsao" class="previsao" :class="{ 'frio': ehTempoFrio, 'quente': ehTempoQuente, 'sem-localizacao': semLocalizacao }">
        <Localidade />
        <template v-if="dadosGeograficos">
          <PrevisaoAtual />
          <PrevisaoFutura />
          <PrevisaoFutura class="background-secundario">
            Depois de amanhã
          </PrevisaoFutura>
        </template>
        <SemLocalizacao v-else/>
    </section>
</template>

<style src="./previsao.scss" lang="scss"></style>
<script src="./previsao.js"></script>
