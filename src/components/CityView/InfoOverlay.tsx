import styled from 'styled-components';

export const InfoOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  color: white;
  background: linear-gradient(
    transparent,
    rgba(0, 0, 0, 0.8)
  );

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;
