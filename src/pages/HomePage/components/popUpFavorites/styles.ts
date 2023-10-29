import styled, { keyframes } from "styled-components";

type PopUpProps = {
    $CloseFavorites: boolean;
};

const FadeUp = keyframes`
    from { transform: scale(0); opacity: 0}
    to { transform: scale(1); opacity: 1;}
`;
export const PopUpFavoritesContainer = styled.section<PopUpProps>`
    width: 60.5rem;
    height: max-content;
    padding: 2rem 0;
    border-radius: 2.5625rem;
    background: ${({ theme }) => theme.colors.greenMint};
    box-shadow: 16px 16px 2px 0px rgba(0, 0, 0, 0.25);
    animation: ${FadeUp} 0.4s ease;
    display: ${({ $CloseFavorites }) => ($CloseFavorites ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4.73rem;
    position: absolute;
    z-index: 999;
    > img {
        width: 250px;
    }
`;

export const ButtonCLose = styled.button`
    position: absolute;
    top: -30px;
    left: -30px;
    width: 4.02225rem;
    height: 4.07013rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: -4px -8px 8px 0px rgba(0, 0, 0, 0.25) inset;
    border-radius: 50%;
    outline: none;
    display: grid;
    place-items: center;
    font-size: 3rem;
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
    font-size: 1.6rem;
    left: 50px;
`;
export const FavoriteQuoteContainer = styled.div`
    width: 52.44556rem;
    height: max-content;
    display: flex;
    flex-flow: row wrap;
    gap: 2.73rem;
    align-items: center;
`;

export const FavoriteQuote = styled.div`
    width: 24.50506rem;
    height: 8.41569rem;
    border-radius: 0.875rem;
    border: 1px solid ${({ theme }) => theme.fonts.FColorPrimary};
    background: ${({ theme }) => theme.colors.teaRose};
    display: grid;
    place-items: center;
    position: relative;
    > h3 {
        display: flex;
        width: 23.06963rem;
        height: max-content;
        flex-direction: column;
        justify-content: center;
        color: ${({ theme }) => theme.fonts.FColorPrimary};
        text-align: center;
        font-family: ${({ theme }) => theme.fonts.fontSecondary};
        font-size: 1.3rem;
        font-weight: 700;
        letter-spacing: 0.105rem;
        padding: 0.4rem;
    }
    > button {
        width: 2.75rem;
        height: 2.875rem;
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
        right: -15px;
        &:active {
            transition: transform 0.4s ease;
            transform: scale(0.95);
        }
    }
`;
