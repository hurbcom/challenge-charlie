<template>
    <section class="previsao-futura">
        <div class="conteudo-previsao">
            <span>
              <slot>
                Amanhã
              </slot>
            </span>
            <span @click="mudarEscalaTemperatura">{{temperatura || '---'}} °{{escalaTemperatura}}</span>
        </div>
    </section>
</template>

<style src="./previsaoFutura.scss" lang="scss"></style>
<script src="./previsaoFutura.js"></script>
