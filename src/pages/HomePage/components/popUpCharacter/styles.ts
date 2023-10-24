import styled, { keyframes } from "styled-components";

type PopUpProps = {
    $CloseModal: boolean;
};

const FadeUp = keyframes`
    from { transform: scale(0); opacity: 0}
    to { transform: scale(1); opacity: 1;}
`;
export const PopUpCharacterContainer = styled.section<PopUpProps>`
    display: ${({ $CloseModal }) => ($CloseModal ? "grid" : "none")};
    width: 100%;
    height: ${`${window.innerHeight}vw`};
    background-color: rgba(0, 0, 0, 0.41);
    place-items: center;
    position: absolute;
    z-index: 999;
`;
export const PopUpCharacterContent = styled.section`
    transition: transform 0.3s;
    animation: ${FadeUp} 0.4s ease;
    width: 56.5rem;
    height: 33rem;
    border-radius: 1.875rem;
    border: 1px solid rgba(0, 0, 0, 0.41);
    background: ${({ theme }) => theme.colors.greenMint};
    box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    z-index: 20;
    > section {
        display: grid;
        place-items: center;
        > img {
            width: 16.6875rem;
            height: 27.375rem;
        }
    }
    > button {
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
            transition: 0.4s ease;
            transform: scale(0.95);
            font-size: 1.9rem;
        }
        &:focus {
            outline: 2px ${({ theme }) => theme.colors.grayPlatinum} solid;
        }
    }
`;

export const PopUpCharacterInfo = styled.section`
    width: 29.875rem;
    height: max-content;
    margin-left: 8rem;
    border-radius: 0.0625rem 1.875rem 1.875rem 0.0625rem;
    background: ${({ theme }) => theme.colors.teaRose};
    box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.25);
    display: grid;
    place-items: center;
    > article {
        width: 19.49131rem;
        height: 33rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2.5rem;

        > span {
            width: inherit;
            padding: 1rem;
            border-radius: 10px;
            background-color: ${({ theme }) => theme.colors.secondary};
            box-shadow: 0px -1px 11px 0px rgba(0, 0, 0, 0.25) inset;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

            > h2 {
                color: ${({ theme }) => theme.fonts.FColorPrimary};
                text-align: center;
                font-family: ${({ theme }) => theme.fonts.fontPrimary};
                font-size: 1.425rem;
                font-weight: 700;
                line-height: normal;
                letter-spacing: 0.195rem;
            }
        }
        > div {
            width: 19.49131rem;
            height: max-content;
            gap: 2rem;
            padding-bottom: 2.44rem;
            border-radius: 1.25rem;
            background: ${({ theme }) => theme.colors.grayPlatinum};
            filter: drop-shadow(9px 8px 7px rgba(0, 0, 0, 0.25));
            display: grid;
            > span {
                width: inherit;
                height: 3.16563rem;
                border-radius: 1.3rem 1.25rem 0rem 0rem;
                background: ${({ theme }) => theme.colors.secondary};
                text-align: center;
                > h3 {
                    color: ${({ theme }) => theme.fonts.FColorPrimary};
                    text-align: center;
                    font-family: ${({ theme }) => theme.fonts.fontPrimary};
                    font-size: 2rem;
                    font-weight: 700;
                    letter-spacing: 0.24rem;
                }
            }
            p {
                color: ${({ theme }) => theme.fonts.FColorPrimary};
                text-align: center;
                font-family: ${({ theme }) => theme.fonts.fontSecondary};
                font-size: 1.375rem;
                font-weight: 400;
                letter-spacing: 0.16875rem;
                width: inherit;
            }
        }
    }
`;
export const InfoHeart = styled.aside`
    display: none;
    position: absolute;
    width: 10.40569rem;
    bottom: 30px;
    padding: 1rem 0;
    right: 120px;
    border-radius: 5px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background-color: ${({ theme }) => theme.colors.greenMint};
    color: #333;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.fontPrimary};
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.07875rem;
    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 10px;
        right: -60px;
        border-width: 20px;
        border-style: solid;
        border-color: transparent transparent transparent ${({ theme }) => theme.colors.greenMint};
        transform: translateX(-50%);
    }
`;

export const BtnHeart = styled.button`
    width: 4.02225rem;
    height: 4.07013rem;
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: block;
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
    &:hover + ${InfoHeart} {
        display: block;
    }
`;
