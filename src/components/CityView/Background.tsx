import styled from 'styled-components';

export const Background = styled.div<{ url: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.4)
  ), url(${props => props.url});
  background-size: cover;
  background-position: center;
  transition: opacity 0.5s ease-in-out;
`;
