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
    --text: #969CB3;
    --white: #FFF;
    --text-body: #141414;
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

  .react-modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .5);
  }

  .react-modal-content {
    position: relative;
    padding: 2rem;
    width: 100%;
    max-width: 576px;
    background-color: var(--background);
    border-radius: 0.4rem;

    @media (min-width: 720px) {
      padding: 4.8rem;
    }
  }

`
