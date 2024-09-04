import styled, { keyframes } from "styled-components";
import { media } from "../../../../styles/customMediaQuery";

interface Props {
    $active: boolean;
}

const FadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const FadeOut = keyframes`
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-10px);
    }
`;

export const ContainerSearch = styled.form<Props>`
    max-width: 700px;
    max-height: 60px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.9rem;
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    animation: ${({ $active }) => ($active ? FadeIn : FadeOut)} 0.3s ease-in-out forwards;

    ${media.tablet} {
        max-width: 400px;
        gap: 0.4rem;
    }

    ${media.mobile} {
        max-width: 18.125rem;
    }

    ${({ $active }) => !$active && "pointer-events: none;"}
`;

export const Input = styled.input`
    width: 100%;
    height: 100%;
    border-radius: 0.625rem;
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

    ${media.mobile} {
        height: 20%;
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
        width: 60px;
        height: 50px;
        font-size: 1.2rem;
    }
`;
