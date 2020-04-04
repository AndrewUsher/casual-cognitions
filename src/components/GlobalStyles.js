import { createGlobalStyle } from 'styled-components'

const colors = {
  a: {
    light: '#292d35',
    dark: '#d6d2ca'
  },
  pageBackground: {
    light: '#fff',
    dark: '#333'
  },
  mainHeading: {
    light: '#000000e6',
    dark: '#ffffff'
  },
  subHeading: {
    light: '#000000e6',
    dark: '#ffffff'
  },
  p: {
    light: '#000c',
    dark: '#fffc'
  },
  small: {
    light: '#000c',
    dark: '#fffc'
  }
}

const getColor = obj => props => obj[props.theme.currentTheme]

const GlobalStyles = createGlobalStyle`
  html {
    font: 125%/1.5 'PT Sans',sans-serif;
    box-sizing: border-box;
    overflow-y: scroll;
  }

  body {
    background-color: ${props => colors.pageBackground[props.theme.currentTheme]};
    color: #000c;
    font-family: 'PT Sans',sans-serif;
    font-weight: 400;
    margin: 0;
    word-wrap: break-word;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
  }

  h1 {
    color: ${getColor(colors.mainHeading)};
  }

  h2, h3, h4, h5 {
    color: ${getColor(colors.subHeading)};
  }

  p {
    color: ${getColor(colors.p)};
  }

  small {
    color: ${getColor(colors.small)};
  }

  a {
    color: ${getColor(colors.a)};
    text-shadow: none;
    background-image: linear-gradient(to top, #0000, #0000 1px, ${getColor(colors.a)} 1px, ${getColor(colors.a)} 2px, #0000 2px);
  }


  }

  span.gatsby-resp-image-background-image {
    display: none !important;
  }
`

export { GlobalStyles }
