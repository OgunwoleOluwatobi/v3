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