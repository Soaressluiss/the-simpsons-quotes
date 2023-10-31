import styled, { keyframes } from "styled-components";
import { media } from "../../../../styles/customMediaQuery";

interface IIconProps {
    $isActive: string | boolean;
}
export const fadeUp = keyframes`
    from {opacity: 0; transform: translateY(50px)}
    to { opacity:1; transform: translateY(0)}
`;
export const SongContainer = styled.section`
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 150px;
    height: 50px;
    position: absolute;
    right: 70px;
    bottom: 85px;
    border-radius: 5px;
    display: grid;
    place-items: center;
    animation: ${fadeUp} 0.4s ease;
    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 50px;
        right: 45px;
        border-width: 15px;
        border-style: solid;
        border-color: ${({ theme }) => theme.colors.secondary} transparent transparent transparent;
        transform: translateX(-50%);
    }

    ${media.tablet} {
        right: 55px;
        bottom: 70px;
    }
    ${media.mobile} {
        right: 20px;
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
