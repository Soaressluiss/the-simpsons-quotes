import styled, { keyframes } from "styled-components";
import { media } from "../../../../styles/customMediaQuery";

interface IIconProps {
    $isActive: string | boolean;
}

interface ISongContainerProps {
    $isVisible: boolean;
}
export const fadeUp = keyframes`
    from {opacity: 0; transform: translateY(50px)}
    to { opacity:1; transform: translateY(0)}
`;
export const fadeOut = keyframes`
    from {opacity: 1; transform: translateY(0px)}
    to { opacity:0; transform: translateY(50px)}
`;

export const SongContainer = styled.section<ISongContainerProps>`
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 180px;
    height: 50px;
    position: absolute;
    bottom: 85px;
    border-radius: 5px;
    display: grid;
    visibility: ${({ $isVisible }) => ($isVisible ? "hidden" : "visible")};
    place-items: center;
    animation: ${({ $isVisible }) => ($isVisible ? fadeOut : fadeUp)} 0.4s ease;
    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 50px;
        right: 60px;
        border-width: 15px;
        border-style: solid;
        border-color: ${({ theme }) => theme.colors.secondary} transparent transparent transparent;
        transform: translateX(-50%);
    }

    ${media.tablet} {
        bottom: 70px;
    }

    > ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.6rem;
    }
`;

export const IconSong = styled.li<IIconProps>`
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.fonts.FColorPrimary};
    background-color: ${({ $isActive }) => ($isActive ? "#00ADEF" : "transparent")};
    display: grid;
    place-items: center;
    border-radius: 50%;
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        transition: all 0.4s ease;
    }
`;

export const Audio = styled.audio`
    position: absolute;
    width: 1px;
    z-index: -1;
    opacity: 0;
    pointer-events: none;
`;
