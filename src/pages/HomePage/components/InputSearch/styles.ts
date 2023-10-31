import styled from "styled-components";
import { media } from "../../../../styles/customMediaQuery";

export const ContainerSearch = styled.form`
    width: 700px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.9rem;
    ${media.tablet} {
        width: max-content;
    }
    ${media.mobile} {
        gap: 0.6rem;
    }
`;

export const Input = styled.input`
    width: 800px;
    height: 60px;
    border-radius: 15px;
    background: ${({ theme }) => theme.colors.grayPlatinum};
    outline: none;
    border: none;
    padding: 1rem;
    font-size: 1.4rem;
    letter-spacing: 3.36px;
    font-family: ${({ theme }) => theme.fonts.fontPrimary};
    color: ${({ theme }) => theme.fonts.FColorPrimary};
    &:focus {
        outline: 3px ${({ theme }) => theme.colors.secondary} solid;
    }

    &::placeholder {
        font-family: ${({ theme }) => theme.fonts.fontPrimary};
        font-size: 1.4rem;
        font-weight: 400;
        letter-spacing: 3.36px;
        color: ${({ theme }) => theme.fonts.FColorPrimary};
    }
    ${media.tablet} {
        width: 500px;
        height: 50px;
    }
    ${media.mobile} {
        width: 250px;
        font-size: 0.8rem;
        border-radius: 10px;
        &::placeholder {
            font-size: 0.8rem;
        }
    }
`;

export const ElipseBtn = styled.button`
    display: block;
    width: 73px;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: -4px -8px 8px 0px rgba(0, 0, 0, 0.25) inset;
    border-radius: 50%;
    outline: none;
    display: grid;
    place-items: center;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.fonts.FColorPrimary};
    cursor: pointer;
    border: none;
    &:active {
        transition: 0.4s ease;
        transform: scale(0.95);
        font-size: 1.9rem;
    }
    &:focus {
        outline: 2px ${({ theme }) => theme.colors.grayPlatinum} solid;
    }

    ${media.tablet} {
        width: 50px;
        height: 50px;
        font-size: 1.2rem;
    }
`;
