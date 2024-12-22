import axios from 'axios';
import { WeatherResponse } from '../types';
import { API_CONFIG } from '../config/api';

const weatherApi = axios.create({
  baseURL: API_CONFIG.OPENWEATHER_BASE_URL
});

export const getWeatherByCity = async (cityName: string): Promise<WeatherResponse> => {
  try {
    const response = await weatherApi.get('/weather', {
      params: {
        q: cityName,
        appid: API_CONFIG.OPENWEATHER_API_KEY,
        units: 'metric'
      }
    });

    // Ensure we use the official name from the API response
    return {
      ...response.data,
      name: response.data.name // This will be the official city name from OpenWeather
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw new Error('City not found');
  }
};