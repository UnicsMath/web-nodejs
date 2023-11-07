import type { PageLoad } from './$types';
import axios from "axios";

export type WeatherForecast = {
    date: Date
    temperatureC: number
    temperatureF: number
    summary: string
}

export const load: PageLoad = async function () {
    try {
        return { weatherForecast: (await axios.get('http://localhost:5279/WeatherForecast')).data as WeatherForecast[] };
    } catch (error) {
        console.error(error);

    }
};