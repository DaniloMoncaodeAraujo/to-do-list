import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
      body{
        transition: 0.7s linear;
      }

      *{
        font-family: "Roboto", sans-serif;
        transition: 0.7s linear;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
      }
`

export default GlobalStyles