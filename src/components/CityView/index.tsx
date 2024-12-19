import React from 'react';
import { MapPin, Thermometer } from 'lucide-react';
import { City } from '../../types';
import {Background} from './Background';
import {InfoOverlay} from './InfoOverlay';
import { CityName, CountryName, WeatherInfo } from './Typography';
import UnsplashAttribution from '../UnsplashAttribution';

interface CityViewProps {
  city: City;
}

const CityView: React.FC<CityViewProps> = ({ city }) => {
  return (
    <Background url={city.photo.urls.regular}>
      <InfoOverlay>
        <CityName>{city.name}</CityName>
        <CountryName>{city.country}</CountryName>
        <WeatherInfo>
          <span>
            <MapPin size={24} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            {city.lat.toFixed(2)}°N, {city.lon.toFixed(2)}°E
          </span>
          <span>
            <Thermometer size={24} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            {city.temp.toFixed(1)}°C - {city.weather}
          </span>
        </WeatherInfo>
      </InfoOverlay>
      <UnsplashAttribution photo={city.photo} />
    </Background>
  );
};

export default CityView;
