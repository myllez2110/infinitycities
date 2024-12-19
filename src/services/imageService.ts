import axios from 'axios';
import { API_CONFIG } from '../config/api';
import { UnsplashPhoto } from '../types';

const imageApi = axios.create({
  baseURL: API_CONFIG.UNSPLASH_BASE_URL,
  headers: {
    Authorization: `Client-ID ${API_CONFIG.UNSPLASH_ACCESS_KEY}`
  }
});

export const getCityImage = async (cityName: string, country: string): Promise<UnsplashPhoto> => {
  try {
    const response = await imageApi.get('/search/photos', {
      params: {
        query: `${cityName}, ${country} `,
        content_filter: 'high',
        per_page: 5,
      }
    });

    if (response.data.results.length > 0) {
      return response.data.results[0];
    }

    return {
      id: 'fallback',
      urls: {
        regular: `https://source.unsplash.com/1920x1080/?${encodeURIComponent(`${cityName},${country},cityscape`)}`,
        full: `https://source.unsplash.com/1920x1080/?${encodeURIComponent(`${cityName},${country},cityscape`)}`
      },
      user: {
        name: 'Unsplash',
        links: {
          html: 'https://unsplash.com'
        }
      },
      links: {
        download_location: ''
      }
    };
  } catch (error) {
    console.error('Error fetching city image:', error);
    return {
      id: 'fallback',
      urls: {
        regular: `https://source.unsplash.com/1920x1080/?${encodeURIComponent(`${cityName},${country},cityscape`)}`,
        full: `https://source.unsplash.com/1920x1080/?${encodeURIComponent(`${cityName},${country},cityscape`)}`
      },
      user: {
        name: 'Unsplash',
        links: {
          html: 'https://unsplash.com'
        }
      },
      links: {
        download_location: ''
      }
    };
  }
};

export const triggerDownload = async (photoId: string): Promise<void> => {
  try {
    await imageApi.get(`/photos/${photoId}/download`);
  } catch (error) {
    console.error('Error triggering download:', error);
  }
};
