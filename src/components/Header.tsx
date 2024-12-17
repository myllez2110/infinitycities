import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #000;
  color: #fff;
  padding: 10px 20px;
  font-family: Arial, sans-serif;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const GitButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #24292f;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #58a6ff;
  }

  & > svg {
    margin-right: 5px;
  }
`;

const Header: React.FC = () => (
  <HeaderContainer>
    <Title>Explore Cities Worldwide</Title>
    <GitButton href="https://github.com/myllez2110" target="_blank" rel="noopener noreferrer">
      <FaGithub size={16} /> GitHub
    </GitButton>
  </HeaderContainer>
);

export default Header;
