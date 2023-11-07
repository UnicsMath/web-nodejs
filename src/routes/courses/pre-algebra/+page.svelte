<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

{#each data.weatherForecast as weatherInfo}
    <ul>
        <h2>date: {weatherInfo.date}</h2>
        <li>temperature C: {weatherInfo.temperatureC}</li>
        <li>temperature F: {weatherInfo.temperatureF}</li>
        <li>summary: {weatherInfo.summary}</li>
    </ul>
{/each}