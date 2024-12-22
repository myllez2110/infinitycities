import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { Search } from 'lucide-react';

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

  @media (max-width: 768px) {
    font-weight: 300;
    font-size: 1rem;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  flex: 0 1 300px;

  @media (max-width: 768px) {
    margin-right: 2.5%;
      flex: 0 1 200px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 36px 8px 12px;
  border-radius: 6px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  
`;

const SearchIcon = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: white;
  }
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

interface HeaderProps {
  onSearch: (city: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onSearch(searchValue.trim());
      setSearchValue('');
    }
  };

  return (
    <HeaderContainer>
      <Title>Explore Cities Worldwide</Title>
      <SearchContainer>
        <form onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            placeholder="Search for a city..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <SearchIcon type="submit">
            <Search size={16} />
          </SearchIcon>
        </form>
      </SearchContainer>
      <GitButton href="https://github.com/myllez2110" target="_blank" rel="noopener noreferrer">
        <FaGithub size={16} /> GitHub
      </GitButton>
    </HeaderContainer>
  );
};

export default Header;