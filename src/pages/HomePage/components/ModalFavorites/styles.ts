import styled, { keyframes } from "styled-components";
import { media } from "../../../../styles/customMediaQuery";

const FadeUp = keyframes`
    from { transform: scale(0); opacity: 0}
    to { transform: scale(1); opacity: 1;}
`;

export const ModalFavoritesContainer = styled.section`
    min-width: 584px;
    width: 100%;
    height: 400px;
    padding: 2rem 0;
    border-radius: 1.5625rem;
    background: ${({ theme }) => theme.colors.greenMint};
    box-shadow: 10px 10px 2px 0px rgba(0, 0, 0, 0.25);
    animation: ${FadeUp} 0.4s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.875rem;
    position: absolute;
    z-index: 10;
    ${media.tablet} {
        min-width: 25rem;
    }
    ${media.mobile} {
        min-width: 16.25rem;
    }
    > img {
        width: 250px;

        ${media.tablet} {
            width: 200px;
        }
        ${media.mobile} {
            width: 150px;
        }
    }
`;

export const ButtonCLose = styled.button`
    position: absolute;
    top: -15px;
    left: -10px;
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
        transition: all 0.4s ease;
        transform: scale(0.95);
        font-size: 1.9rem;
    }
    &:focus {
        outline: 2px ${({ theme }) => theme.colors.grayPlatinum} solid;
    }
`;

export const ButtonDeleteAll = styled(ButtonCLose)`
    font-size: 1.2rem;
    left: 40px;
`;
export const FavoriteQuoteContainer = styled.div`
    width: 100%;
    height: 300px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 20px;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.secondary};
    }

    ${media.tablet} {
        grid-template-columns: 1fr;
    }
`;

export const FavoriteQuote = styled.div`
    width: 100%;
    height: max-content;
    min-height: 7.5rem;
    padding: 5px;
    border-radius: 0.875rem;
    border: 1px solid ${({ theme }) => theme.fonts.FColorPrimary};
    background: ${({ theme }) => theme.colors.teaRose};
    display: grid;
    place-items: center;
    position: relative;
    ${media.mobile} {
        width: 100%;
    }

    > h3 {
        display: flex;
        height: max-content;
        flex-direction: column;
        justify-content: center;
        color: ${({ theme }) => theme.fonts.FColorPrimary};
        text-align: center;
        font-family: ${({ theme }) => theme.fonts.fontSecondary};
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 0.105rem;
        padding: 0.4rem;
    }
    > button {
        width: 2.4rem;
        height: 2.4rem;
        background-color: ${({ theme }) => theme.colors.secondary};
        box-shadow: -1px 0px 10px 0px rgba(0, 0, 0, 0.36) inset;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.4rem;
        display: grid;
        place-items: center;
        position: absolute;
        top: -20px;
        right: -18px;
        font-size: 1rem;
        &:active {
            transition: transform 0.4s ease;
            transform: scale(0.95);
        }
    }
`;
