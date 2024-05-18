import styled, { keyframes } from "styled-components";
import { media } from "../../../../styles/customMediaQuery";

type ModalBackgroundTypes = {
    $CloseModal: boolean;
};

const FadeUp = keyframes`
    from { transform: scale(0); opacity: 0}
    to { transform: scale(1); opacity: 1;}
`;
export const ModalBackground = styled.div<ModalBackgroundTypes>`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: ${({ $CloseModal }) => ($CloseModal ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    position: fixed;
`;
export const ModalCharacterContainer = styled.section`
    display: flex;
    transition: transform 0.3s;
    animation: ${FadeUp} 0.4s ease;
    width: 36.5rem;
    height: 26rem;
    border-radius: 1.875rem;
    border: 1px solid rgba(0, 0, 0, 0.41);
    background: ${({ theme }) => theme.colors.greenMint};
    box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.25);
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    z-index: 20;

    ${media.tablet} {
        width: 20rem;
        height: max-content;
        flex-direction: column;
    }
    ${media.mobile} {
        width: 15rem;
        border-radius: 1rem;
    }

    > section {
        display: grid;
        place-items: center;
        width: 50%;

        > img {
            width: 11.6875rem;
            height: 20.375rem;
            ${media.tablet} {
                width: 10.8125rem;
                height: 16.75rem;
                margin-bottom: 1rem;
            }
            ${media.mobile} {
                width: 10rem;
                height: 16rem;
                margin: 0;
            }
        }

        ${media.tablet} {
            width: 100%;
            padding: 1rem;
        }
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

export const ModalCharacterInfo = styled.section`
    height: 100%;
    border-radius: 0.0625rem 1.875rem 1.875rem 0.0625rem;
    background: ${({ theme }) => theme.colors.teaRose};
    box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.25);
    display: grid;
    place-items: center;
    padding: 1rem;

    ${media.tablet} {
        border-radius: 0 0 1.875rem 1.875rem;
    }
    ${media.mobile} {
        border-radius: 0 0 1rem 1rem;
    }

    > article {
        height: max-content;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        ${media.tablet} {
            width: 100%;
            align-items: center;
            margin-bottom: 2rem;
        }

        ${media.mobile} {
            width: 100%;
        }
        > span {
            width: 80%;
            padding: 1rem;
            border-radius: 10px;
            background-color: ${({ theme }) => theme.colors.secondary};
            box-shadow: 0px -1px 11px 0px rgba(0, 0, 0, 0.25) inset;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

            ${media.tablet} {
                width: 90%;
                gap: 0rem;
            }
            ${media.mobile} {
                padding: 0.6rem;
                border-radius: 5px;
            }

            > h2 {
                color: ${({ theme }) => theme.fonts.FColorPrimary};
                text-align: center;
                font-family: ${({ theme }) => theme.fonts.fontPrimary};
                font-size: 1rem;
                font-weight: 700;
                letter-spacing: 0.195rem;
                hyphens: auto;
                overflow-wrap: break-word;

                ${media.mobile} {
                    font-size: 0.7rem;
                    letter-spacing: 2.88px;
                }
            }
        }
        > div {
            width: 80%;
            height: max-content;
            gap: 1rem;
            padding-bottom: 2.44rem;
            border-radius: 1.25rem;
            background: ${({ theme }) => theme.colors.grayPlatinum};
            filter: drop-shadow(9px 8px 7px rgba(0, 0, 0, 0.25));
            display: grid;
            place-items: center;

            ${media.tablet} {
                width: 90%;
                gap: 1rem;
            }
            ${media.mobile} {
                border-radius: 0.8rem;
            }

            > span {
                width: 100%;
                height: 2.16563rem;
                border-radius: 1.3rem 1.25rem 0rem 0rem;
                background: ${({ theme }) => theme.colors.secondary};
                display: grid;
                place-items: center;

                ${media.mobile} {
                    display: grid;
                    place-items: center;
                    border-radius: 0.8rem 0.8rem 0rem 0rem;
                }
                > h3 {
                    color: ${({ theme }) => theme.fonts.FColorPrimary};
                    text-align: center;
                    font-family: ${({ theme }) => theme.fonts.fontPrimary};
                    font-size: 1rem;
                    font-weight: 700;
                    letter-spacing: 0.24rem;

                    ${media.mobile} {
                        font-size: 1rem;
                        letter-spacing: 2.88px;
                    }
                }
            }
            p {
                color: ${({ theme }) => theme.fonts.FColorPrimary};
                text-align: inherit;
                font-family: ${({ theme }) => theme.fonts.fontSecondary};
                font-size: 12px;
                font-weight: 400;
                letter-spacing: 0.16875rem;
                width: inherit;
                hyphens: auto;
                overflow-wrap: break-word;
                ${media.mobile} {
                    font-size: 0.8rem;
                    letter-spacing: 2.16px;
                }
                &::first-letter {
                    text-transform: capitalize;
                    font-weight: 700;
                    font-size: 1rem;
                    padding-left: 10px;
                }
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
    font-size: 1rem;
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
    ${media.mobile} {
        width: 46px;
        height: 43.7px;
        font-size: 0.7rem;
    }
`;
