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
        scroll-behavior: smooth;
        overflow-x: hidden;
        width: 100%;
        height: 100%;

        &::-webkit-scrollbar {
            width:5px;
        }
        &::-webkit-scrollbar-thumb {
            background-color:  ${({ theme }) => theme.colors.secondary};
        }
    }
    img {
        max-width: 100%;
    }
`;
