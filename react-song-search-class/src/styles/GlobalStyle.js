import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }

  input:focus{
    outline:none;
  }

  html {
  font-size: 62.5%;
  }

  body {
    font-family: Arial,sans-serif;
    font-size: 1.6rem;
    line-height: 1.4;
  }

  button:focus {
    outline: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
