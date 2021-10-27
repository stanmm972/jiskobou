import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        background: #efeff0;
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;
