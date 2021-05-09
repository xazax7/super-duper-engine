<template>
    <div id="app">
        <WeatherBanner />
        <ChapmanCares />
        <CaresForm />
    </div>
</template>

<script>
import WeatherBanner from '@/components/weather-banner';
import ChapmanCares from '@/components/chapman-cares';
import CaresForm from '@/components/cares-form';

export default {
    name: 'App',
    components: {
        WeatherBanner,
        ChapmanCares,
        CaresForm,
    },
};
</script>

<style lang="scss">
:root {
    --max-width: 960px;
    --color-highlight: #f5c700;
}
* {
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 2rem;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    max-width: var(--max-width);
    margin: 0 auto;
}
</style>
