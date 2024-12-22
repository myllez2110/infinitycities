import styled from 'styled-components';

export const AttributionContainer = styled.div`
  position: absolute;
  bottom: 24px;
  right: 24px;
  background: rgba(0, 0, 0, 0.8);
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 16px;
  z-index: 10;
  backdrop-filter: blur(8px);

  @media (max-width: 768px) {
    top: 24px;
    bottom: auto;
    right: 5px;
  }
`;

export const AttributionText = styled.div`
  color: white;
  font-size: 14px;

  a {
    color: white;
    text-decoration: none;
    opacity: 0.8;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
      text-decoration: underline;
    }
  }
`;

export const DownloadButton = styled.button`
  background: white;
  color: black;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
