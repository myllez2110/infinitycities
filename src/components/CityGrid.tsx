import React from 'react';
import styled from 'styled-components';
import CityCard from './CityCard';
import { City } from '../types';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

interface CityGridProps {
  cities: City[];
}

const CityGrid: React.FC<CityGridProps> = ({ cities }) => (
  <Grid>
    {cities.map((city) => (
      <CityCard key={city.id} city={city} />
    ))}
  </Grid>
);

export default CityGrid;