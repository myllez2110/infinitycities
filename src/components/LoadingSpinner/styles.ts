import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 50%;
  z-index: 1000;
  
  svg {
    animation: ${spin} 1s linear infinite;
  }
`;