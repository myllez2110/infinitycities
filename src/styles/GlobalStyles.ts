import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow-x: hidden;
    overflow-y: auto;
    background: black;
    
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #000000;
    }

    &::-webkit-scrollbar-thumb {
      background: #ffffff;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #cccccc;
    }
  }

  * {
    box-sizing: border-box;
  }
`;