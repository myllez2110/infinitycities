import React from 'react';
import { Github } from 'lucide-react';
import { HeaderContainer, GithubLink } from './styles';

const Header: React.FC = () => (
  <HeaderContainer>
    <GithubLink 
      href="https://github.com/YourGithubUsername" 
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github size={24} />
      <span>GitHub</span>
    </GithubLink>
  </HeaderContainer>
);

export default Header;