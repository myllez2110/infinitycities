import axios from 'axios';
import { API_CONFIG } from '../config/api';

const imageApi = axios.create({
  baseURL: API_CONFIG.UNSPLASH_BASE_URL,
  headers: {
    Authorization: `Client-ID ${API_CONFIG.UNSPLASH_ACCESS_KEY}`
  }
});

export const getCityImage = async (cityName: string, country: string): Promise<string> => {
  try {
    const response = await imageApi.get('/photos/random', {
      params: {
        query: `${cityName}, ${country} cityscape architecture`,
        orientation: 'landscape',
        content_filter: 'high'
      }
    });
    return response.data.urls.regular;
  } catch (error) {
    return `https://source.unsplash.com/1920x1080/?${encodeURIComponent(`${cityName},${country},cityscape`)}`;
  }
};