import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0 auto;
    font-family: Arial, Helvetica, sans-serif;
    color: dimgray;
  }
`

export default GlobalStyles
