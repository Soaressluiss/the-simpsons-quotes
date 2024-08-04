import styled, { keyframes } from "styled-components";
import { media } from "../../../../styles/customMediaQuery";

const FadeUp = keyframes`
    from { transform: scale(0); opacity: 0}
    to { transform: scale(1); opacity: 1;}
`;

export const ModalCharacterContainer = styled.section`
    display: flex;
    transition: transform 0.3s;
    width: 600px;
    height: 100%;
    animation: ${FadeUp} 0.4s ease;
    align-items: center;
    justify-content: space-evenly;

    ${media.tablet} {
        width: 100%;
        flex-direction: column;
    }
    > button {
        position: absolute;
        top: -15px;
        left: -15px;
        width: 2.4rem;
        height: 2.4rem;
        background-color: ${({ theme }) => theme.colors.secondary};
        box-shadow: -4px -8px 8px 0px rgba(0, 0, 0, 0.25) inset;
        border-radius: 50%;
        outline: none;
        display: grid;
        place-items: center;
        font-size: 2rem;
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
        ${media.mobile} {
            width: 46px;
            height: 46px;
            font-size: 2rem;
            top: -15px;
            left: -15px;
        }
    }
`;

export const ContainerCharacter = styled.div`
    display: grid;
    place-items: center;
    background: ${({ theme }) => theme.colors.greenMint};
    width: 50%;
    height: 100%;
    border-radius: 20px 0 0 20px;

    ${media.tablet} {
        width: 100%;
        padding: 1rem;
        border-radius: 20px 20px 0 0px;
    }

    > div {
        width: 11.6875rem;
        height: 20.375rem;
        ${media.tablet} {
            width: 140px;
            height: auto;
            margin-bottom: 1rem;
        }
        ${media.mobile} {
            width: 8rem;
            height: auto;
            margin: 0;
        }
    }
`;
export const ModalCharacterInfo = styled.section`
    width: 50%;
    height: 100%;
    padding: 1rem;
    background: ${({ theme }) => theme.colors.teaRose};
    border-radius: 0px 20px 20px 0px;
    ${media.tablet} {
        border-radius: 0 0 20px 20px;
        width: 100%;
        padding: 0.5rem;
    }
`;
export const ContendCharacter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100%;
    width: 100%;
    position: relative;

    ${media.tablet} {
        gap: 0.5rem;
        align-items: center;
    }
    > h2 {
        color: ${({ theme }) => theme.fonts.FColorPrimary};
        text-align: center;
        font-family: ${({ theme }) => theme.fonts.fontPrimary};
        background-color: ${({ theme }) => theme.colors.secondary};
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 0.195rem;
        hyphens: auto;
        overflow-wrap: break-word;
        width: 100%;
        padding: 1rem 0;
        border-radius: 5px;

        ${media.tablet} {
            font-size: 0.7rem;
            letter-spacing: 2.88px;
        }
    }
    div {
        width: 100%;
        gap: 1rem;
        padding-bottom: 2.44rem;
        border-radius: 0.625rem;
        background: ${({ theme }) => theme.colors.grayPlatinum};
        display: grid;
        place-items: center;
        position: relative;

        ${media.tablet} {
            width: 100%;
            gap: 1rem;
        }
        ${media.mobile} {
            border-radius: 0.625rem;
            width: 100%;
        }

        > h3 {
            color: ${({ theme }) => theme.fonts.FColorPrimary};
            text-align: center;
            font-family: ${({ theme }) => theme.fonts.fontPrimary};
            font-size: 1rem;
            font-weight: 700;
            background-color: ${({ theme }) => theme.colors.secondary};
            letter-spacing: 0.24rem;
            width: 100%;
            padding: 1rem 0;

            ${media.tablet} {
                font-size: 0.7rem;
                padding: 0.6rem;
                letter-spacing: 2.88px;
            }
        }
        span {
            color: ${({ theme }) => theme.fonts.FColorPrimary};
            padding: 0 1rem;
            text-align: inherit;
            font-family: ${({ theme }) => theme.fonts.fontSecondary};
            font-size: 0.75rem;
            font-weight: 400;
            letter-spacing: 0.16875rem;
            width: inherit;
            hyphens: auto;
            min-height: 150px;

            &::first-letter {
                text-transform: capitalize;
                font-weight: 700;
                font-size: 1rem;
                padding-left: 10px;
            }
            ${media.tablet} {
                min-height: 100px;
            }
        }
    }
`;
export const InfoHeart = styled.aside`
    display: none;
    position: absolute;
    width: 8.40569rem;
    bottom: 11px;
    padding: 0.5rem 0;
    right: 65px;
    border-radius: 5px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background-color: ${({ theme }) => theme.colors.greenMint};
    color: ${({ theme }) => theme.fonts.FColorPrimary};
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.fontPrimary};
    font-size: 0.775rem;
    font-weight: 700;
    letter-spacing: 0.07875rem;
    &::before {
        content: "";
        display: block;
        position: absolute;
        right: -44px;
        top: 0px;
        border-width: 15px;
        border-style: solid;
        border-color: transparent transparent transparent ${({ theme }) => theme.colors.greenMint};
        transform: translateX(-50%);
    }
`;

export const BtnHeart = styled.button`
    width: 2.4rem;
    height: 2.4rem;
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: block;
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
    &:focus {
        outline: 2px ${({ theme }) => theme.colors.grayPlatinum} solid;
    }
    &:hover + ${InfoHeart} {
        display: block;
    }
    ${media.mobile} {
        width: 2.875rem;
        height: 2.7313rem;
    }
`;
