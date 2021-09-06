import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #191919;
    --dark: #222;
    --highlight: #FFF447;
    --emphasis: #3EB595;
    --decoration: #003F63;
    --red: #E52E4D;
    --marking: #C9C9C9;
    --text-title: #F5F5F5;
    --text-body: #969CB3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    font-size: 62.5%;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    height: 100%;
    color: var(--text-title);
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  input, textarea {
    font-size: 62.5%;
    font-family: 'Poppins', sans-serif;
  }

  button {
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
  }

  [disabled] {
    opacity: .6;
    cursor: not-allowed;
  }

  a {
    text-decoration: none;
  }
`
