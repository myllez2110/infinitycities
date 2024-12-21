import styled from 'styled-components';

export const CityName = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const CountryName = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin: 0.5rem 0 1.5rem;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const WeatherInfo = styled.div`
  font-size: 1.5rem;
  display: flex;
  gap: 2rem;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    gap: 1rem;
  }
`;
