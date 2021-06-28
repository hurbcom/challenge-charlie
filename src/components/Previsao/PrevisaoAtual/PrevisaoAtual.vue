<template>
    <section id="previsao-atual" class="previsao-atual">
        <component v-if="dadosGeograficos.icone" v-bind:is="dadosGeograficos.icone"></component>
        <IconeTermometro v-else />

        <div class="conteudo-previsao">
            <span>Hoje</span>
            <span class="temperatura" @click="mudarEscalaTemperatura">
              {{temperatura || '---'}} °{{escalaTemperatura}}
            </span>
            <span class="texto-destaque">{{dadosGeograficos.tempo || '---'}}</span>
            <span class="texto-detalhe">Vento: {{dadosGeograficos.vento ? dadosGeograficos.vento.direcao : '---'}} {{dadosGeograficos.vento ? dadosGeograficos.vento.velocidade : '---'}}km/h</span>
            <span class="texto-detalhe">Humidade: {{dadosGeograficos.humidade || '---'}}%</span>
            <span class="texto-detalhe">Pressão: {{dadosGeograficos.pressao || '---'}}hPa</span>
        </div>
    </section>
</template>

<style src="./previsaoAtual.scss" lang="scss"></style>
<script src="./previsaoAtual.js"></script>
