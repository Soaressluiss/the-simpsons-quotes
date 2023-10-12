import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }
    html, body {
        background-color: ${({ theme }) => theme.colors.primary};
        font-family: sans-serif;
        color: ${({ theme }) => theme.fonts.FColorPrimary};
    }
    img {
        max-width: 100%;
    }
`;
