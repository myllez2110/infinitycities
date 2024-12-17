import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 48px;
  background-color: #000000;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px;
`;

export const GithubLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.5px;
  opacity: 0.9;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;