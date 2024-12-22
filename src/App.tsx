import React, { useState, useEffect, useCallback } from 'react';
import { getRandomCity, getCityData } from './services/api';
import CityView from './components/CityView';
import LoadingSpinner from './components/LoadingSpinner';
import Header from './components/Header';
import { GlobalStyle } from './styles/GlobalStyles';
import { City } from './types';
import { useInfiniteScroll } from './hooks/useInfiniteScroll';

function App() {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(false);

  const loadMoreCities = useCallback(async () => {
    if (loading) return;

    try {
      setLoading(true);
      const newCity = await getRandomCity();
      setCities(prev => [...prev, newCity]);
    } catch (error) {
      console.error('Error loading city:', error);
    } finally {
      setLoading(false);
    }
  }, [loading]);

  const handleSearch = async (cityName: string) => {
    try {
      setLoading(true);
      const searchedCity = await getCityData(cityName);
      setCities([searchedCity]); // Reset cities array with the searched city
    } catch (error) {
      console.error('Error searching for city:', error);
    } finally {
      setLoading(false);
    }
  };

  const { lastElementRef } = useInfiniteScroll(loadMoreCities);

  useEffect(() => {
    const loadInitialCities = async () => {
      try {
        setLoading(true);
        const initialCity = await getRandomCity();
        setCities([initialCity]);
      } catch (error) {
        console.error('Error loading initial city:', error);
      } finally {
        setLoading(false);
      }
    };

    loadInitialCities();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header onSearch={handleSearch} />
      <div style={{ paddingTop: '60px' }}>
        {cities.map((city, index) => (
          <div
            key={city.id}
            ref={index === cities.length - 1 ? lastElementRef : undefined}
            style={{ height: '100vh', position: 'relative' }}
          >
            <CityView city={city} />
          </div>
        ))}
        {loading && <LoadingSpinner />}
      </div>
    </>
  );
}

export default App;