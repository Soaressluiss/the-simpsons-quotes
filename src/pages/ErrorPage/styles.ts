import styled from "styled-components";
import { media } from "../../styles/customMediaQuery";

export const ContainerErroPage = styled.main`
    height: 100vh;
    background-color: #00adef;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;

    ${media.mobile} {
        gap: 8rem;
    }
    > img {
        width: 400px;
        ${media.tablet} {
            width: 300px;
        }
        ${media.mobile} {
            width: 250px;
        }
    }
`;

export const ButtonBackHome = styled.button`
    width: 158px;
    height: 51px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    background: #ffd100;
    box-shadow:
        0px -6px 11px 0px rgba(0, 0, 0, 0.25) inset,
        0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    outline: none;
    color: #333;
    text-align: center;
    font-family: Lato;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 114.646%;
    letter-spacing: 0.9px;
    transition: transform 0.4s ease;

    ${media.mobile} {
        width: 140px;
        font-size: 1rem;
    }
    &:active {
        transform: scale(0.9);
    }
`;
