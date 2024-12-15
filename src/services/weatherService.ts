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
    return response.data;
  } catch (error) {
    // Instead of throwing, return a default weather response
    return {
      name: cityName,
      sys: { country: '??' },
      main: { temp: 0 },
      weather: [{ main: 'Unknown' }],
      coord: { lat: 0, lon: 0 }
    };
  }
};