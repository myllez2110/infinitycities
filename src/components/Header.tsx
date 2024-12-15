import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
`;

const Header: React.FC = () => (
  <HeaderContainer>
    <Title>Explore Cities Worldwide</Title>
    <Subtitle>Discover places, weather, and beautiful cityscapes</Subtitle>
  </HeaderContainer>
);

export default Header;