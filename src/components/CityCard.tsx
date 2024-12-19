import React from 'react';
import styled from 'styled-components';
import { MapPin, Thermometer } from 'lucide-react';
import { City } from '../types';
import UnsplashAttribution from './UnsplashAttribution';

const Card = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px;
  overflow: hidden;
  transition: transform 0.2s;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    margin: 10px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background: #f0f0f0;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: 20px;
`;

const CityName = styled.h2`
  font-size: 24px;
  margin: 0 0 10px 0;
  color: #1a1a1a;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  color: #666;
  gap: 8px;
`;

interface CityCardProps {
  city: City;
}

const CityCard: React.FC<CityCardProps> = ({ city }) => {
  return (
    <Card>
      <ImageContainer>
        <Image 
          src={city.photo.urls.regular} 
          alt={city.name}
        />
        <UnsplashAttribution photo={city.photo} />
      </ImageContainer>
      <Content>
        <CityName>{city.name}, {city.country}</CityName>
        <InfoRow>
          <MapPin size={18} />
          <span>{city.lat.toFixed(2)}°N, {city.lon.toFixed(2)}°E</span>
        </InfoRow>
        <InfoRow>
          <Thermometer size={18} />
          <span>{city.temp.toFixed(1)}°C - {city.weather}</span>
        </InfoRow>
      </Content>
    </Card>
  );
};

export default CityCard;