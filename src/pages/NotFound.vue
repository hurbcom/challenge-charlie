<template>
    <div class="d-flex flex-fill flex-column justify-content-center">
        <h1 class="ml-auto mr-auto mt-5">Página não encontrada</h1>
        <img src="/img/brand/undraw_page_not_found.svg" class="ml-auto mr-auto mt-5">
        <h1 class="ml-auto mr-auto mt-5">
            <router-link to="/">Voltar ao Site</router-link>
        </h1>
    </div>
</template>

<script>
    export default {
        name: 'NotFound'
    }
</script>

<style lang="scss" scoped>
    img{
        max-width: 80vh;
    }
</style>