<template>
    <header class="weather-banner">
        <span v-if="currentTemp">
            <strong>{{ currentTemp }}&deg;</strong> is the
            <span>Current Temperature</span>
        </span>
    </header>
</template>

<script>
import axios from 'axios';

export default {
    name: 'WeatherBanner',
    data() {
        return {
            currentTemp: null,
        };
    },
    created() {
        this.getTemp();
    },
    methods: {
        getTemp() {
            // set variables (there are no errors in these strings)
            const url = 'http://api.openweathermap.org/data/2.5/weather';
            const zipCode = '85226';
            const apiKey = 'eab29b6df2f075a12235544ff5dcdd52';
            const units = 'imperial';
            const endpoint = `${url}?zip=${zipCode}&appid=${apiKey}&units=${units}`;

            // make api call, then set 'this.currentTemp' when it receives a response
            axios.get(endpoint).then((response) => {
                this.currentTemp = response.data.main.temp;
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.weather-banner {
    padding: 1rem;
    text-align: right;
}
</style>
