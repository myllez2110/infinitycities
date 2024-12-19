import React from 'react';
import { Download } from 'lucide-react';
import { AttributionContainer, AttributionText, DownloadButton } from './styles';
import { triggerDownload } from '../../services/imageService';
import { UnsplashPhoto } from '../../types';

interface UnsplashAttributionProps {
  photo: UnsplashPhoto;
}

const UnsplashAttribution: React.FC<UnsplashAttributionProps> = ({ photo }) => {
  const handleDownload = async () => {
    await triggerDownload(photo.id);
    window.open(photo.urls.full, '_blank');
  };

  return (
    <AttributionContainer>
      <AttributionText>
        Photo by{' '}
        <a 
          href={`${photo.user.links.html}?utm_source=city_explorer&utm_medium=referral`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {photo.user.name}
        </a>
        {' '}on{' '}
        <a 
          href="https://unsplash.com/?utm_source=city_explorer&utm_medium=referral"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unsplash
        </a>
      </AttributionText>
      <DownloadButton onClick={handleDownload}>
        <Download />
        Download
      </DownloadButton>
    </AttributionContainer>
  );
};

export default UnsplashAttribution;