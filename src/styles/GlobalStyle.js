import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import FontFaces from './fonts';
import TransitionStyle from './TransitionStyle';
const { colors, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  ${FontFaces};

  html {
      box-sizing: border-box;
      width: 100%;
  }
  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: #14181E;
    font-family: ${fonts.Calibre};
    line-height: 1.3;
    &.hidden {
      overflow: hidden;
    }
    /* &.blur {
      overflow: hidden;
      #root {
        filter: blur(5px) brightness(0.7);
        transition: ${theme.transition};
        pointer-events: none;
        user-select: none;
      }
    } */
  }
  a {
    text-decoration: none;
    color: inherit;
    display: inline-block;
    position: relative;
    cursor: pointer;
    &:hover,
    &:focus {
      color: ${colors.white};
    }
  }
  p {
    font-family: ${fonts.Calibre};
  }
  .gatsby-image-outer-wrapper {
    height: 100%;
  }
  ${TransitionStyle};
`;

export default GlobalStyle;