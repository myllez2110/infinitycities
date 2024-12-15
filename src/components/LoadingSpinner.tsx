import React from 'react';
import styled from 'styled-components';
import { Loader } from 'lucide-react';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  
  svg {
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const LoadingSpinner: React.FC = () => (
  <LoadingContainer>
    <Loader size={40} />
  </LoadingContainer>
);

export default LoadingSpinner;