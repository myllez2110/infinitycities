import { City } from '../types';
import { getWeatherByCity } from './weatherService';
import { getCityImage } from './imageService';
import { generateId } from '../utils/generateId';
import { CITIES } from '../utils/constants';

let usedCities: string[] = [];

const resetUsedCitiesIfNeeded = () => {
  if (usedCities.length >= CITIES.length) {
    usedCities = [];
  }
};

const getUnusedCity = (): string => {
  resetUsedCitiesIfNeeded();
  const availableCities = CITIES.filter(city => !usedCities.includes(city));
  const randomIndex = Math.floor(Math.random() * availableCities.length);
  const cityName = availableCities[randomIndex];
  usedCities.push(cityName);
  return cityName;
};

export const getRandomCity = async (): Promise<City> => {
  const cityName = getUnusedCity();
  return getCityData(cityName);
};

export const getCityData = async (cityName: string): Promise<City> => {
  try {
    const weatherData = await getWeatherByCity(cityName);
    const photo = await getCityImage(weatherData.name, weatherData.sys.country);

    return {
      id: generateId(),
      name: weatherData.name, // Using the official name from the API
      country: weatherData.sys.country,
      temp: weatherData.main.temp,
      weather: weatherData.weather[0].main,
      photo,
      lat: weatherData.coord.lat,
      lon: weatherData.coord.lon
    };
  } catch (error) {
    console.error('Error fetching city data:', error);
    throw error;
  }
};