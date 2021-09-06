import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #191919;
    --highlight: #FFF447;
    --emphasis: #3EB595;
    --decoration: #003F63;
    --marking: #C9C9C9;
    --text: #F5F5F5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    font-size: 62.5%;
    height: 100%;
  }

  input, textarea {
    font-size: 62.5%;
  }
`
