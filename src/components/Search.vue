<template>
    <div class="wrapper-form-field d-flex">
        <span
            class="icon"
            :class="{ 'rotating': searching }"
            data-icon="("
            @click="fetchWeatherInformation()"
        ></span>

        <input
            type="text"
            v-model="userLocation"
            @keypress.enter="fetchWeatherInformation()"
            placeholder="Cidade, Estado"
        />
    </div>
</template>

<script>
export default {
    name: 'Search',
    computed: {
        userLocation: {
            get() {
                return this.$store.state.search.userLocation;
            },
            set(value) {
                this.$store.commit('search/SET_USER_LOCATION', value);
            }
        },
        searching() {
            return this.$store.state.search.searching;
        }
    },
    methods: {
        getUserCurrentLatLong() {
            this.$store.dispatch('search/getUserCurrentPosition');
        },
        fetchWeatherInformation() {
            this.$store.dispatch('search/fetchWeatherInformation');
        }
    },
    created() {
        this.getUserCurrentLatLong();
    }
}
</script>

<style lang="scss" scoped>
    @import url('./../sass/animations.scss');

    .wrapper-form-field {
        padding: 10px;
        height: 15vh;
        align-items: center;
        background-color: #fff;

        .icon {
            color: #7d7978;

            &.rotating {
                -webkit-animation: rotating .5s linear infinite;
                -moz-animation: rotating .5s linear infinite;
                -ms-animation: rotating .5s linear infinite;
                -o-animation: rotating .5s linear infinite;
                animation: rotating .5s linear infinite;
            }
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
