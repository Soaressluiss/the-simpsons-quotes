import styled, { keyframes } from "styled-components";
import { media } from "../../../../styles/customMediaQuery";

type PopUpProps = {
    $CloseFavorites: boolean;
};

const FadeUp = keyframes`
    from { transform: scale(0); opacity: 0}
    to { transform: scale(1); opacity: 1;}
`;
export const PopUpFavoritesContainer = styled.section<PopUpProps>`
    width: 36.5rem;
    height: max-content;
    padding: 2rem 0;
    border-radius: 1.5625rem;
    background: ${({ theme }) => theme.colors.greenMint};
    box-shadow: 10px 10px 2px 0px rgba(0, 0, 0, 0.25);
    animation: ${FadeUp} 0.4s ease;
    display: ${({ $CloseFavorites }) => ($CloseFavorites ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    gap: 2.73rem;
    position: absolute;
    z-index: 999;
    > img {
        width: 250px;

        ${media.tablet} {
            width: 200px;
        }
        ${media.mobile} {
            width: 150px;
        }
    }
    ${media.tablet} {
        width: 20rem;
        place-items: center;
    }
    ${media.mobile} {
        width: 15rem;
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
    height: max-content;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    ${media.tablet} {
        grid-template-columns: 1fr;
    }
`;

export const FavoriteQuote = styled.div`
    width: 16rem;
    height: 6.4rem;
    border-radius: 0.875rem;
    border: 1px solid ${({ theme }) => theme.fonts.FColorPrimary};
    background: ${({ theme }) => theme.colors.teaRose};
    display: grid;
    place-items: center;
    position: relative;
    ${media.mobile} {
        width: 12rem;
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
        color: #cc0000;
        font-size: 1.4rem;
        display: grid;
        place-items: center;
        position: absolute;
        top: -15px;
        right: -17px;
        font-size: 1rem;
        &:active {
            transition: transform 0.4s ease;
            transform: scale(0.95);
        }
    }
`;
