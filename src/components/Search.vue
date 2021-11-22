<template>
    <div class="wrapper-form-field d-flex">
        <span class="icon" data-icon="("></span>
        <input type="text" v-model="userLocation" />
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Search',
    data: () => ({
        userLocation: '',
    }),
    methods: {
        getUserCurrentLatLong() {
            navigator.geolocation.getCurrentPosition(
                position => {
                    this.convertLatLongInLocation(position.coords.latitude, position.coords.longitude);
                },
                error => {
                    console.log(error.message);
                },
            )
        },
        async convertLatLongInLocation(lat, long) {
            const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat},${long}&key=c63386b4f77e46de817bdf94f552cddf&language=en`;
            const { data: { results } } = await axios.get(url);
            const [result] = results;
            const { components: location } = result;
            this.userLocation = `${location.village}, ${location.state} - ${location.country}`;
        },
    },
    created() {
        this.getUserCurrentLatLong();
    }
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