import React from 'react';
import { Loader } from 'lucide-react';
import { SpinnerContainer } from './styles';

const LoadingSpinner: React.FC = () => (
  <SpinnerContainer>
    <Loader size={40} />
  </SpinnerContainer>
);

export default LoadingSpinner;