import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #000;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;

export const GithubLink = styled.a`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  letter-spacing: 0.5px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;