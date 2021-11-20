<template>
    <div class="wrapper-form-field d-flex">
        <span class="icon" data-icon="("></span>
        <input type="text">
    </div>
</template>

<script>
export default {
    name: 'Search'
}
</script>

<style lang="scss" scoped>
    .wrapper-form-field {
        padding: 10px;
        height: 15vh;
        align-items: center;

        .icon {
            color: #7d7978;
        }

        input {
            margin-left: 20px;
            width: 100%;
            border: none;
            color: #7d7978;
            font-weight: 500;
            font-size: 2rem;
            outline: none;
        }
    }
</style>