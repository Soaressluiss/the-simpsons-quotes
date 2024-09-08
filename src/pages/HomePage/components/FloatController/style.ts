import styled, { keyframes } from "styled-components";
import { media } from "../../../../styles/customMediaQuery";
import { fadeOut, fadeUp } from "../SongController/styles";

interface FloatSongProps {
    $toggleFloatSong: boolean;
}

const song = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }

`;

export const FloatSong = styled.div<FloatSongProps>`
    width: 100px;
    height: 50px;
    display: flex;
    animation: ${({ $toggleFloatSong }) => ($toggleFloatSong ? fadeUp : fadeOut)} 0.6s ease forwards;
    position: fixed;
    top: 100px;
    left: 50px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    border: 1px ${({ theme }) => theme.colors.grayPlatinum} solid;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    ${media.tablet} {
        top: 70px;
        left: 10px;
        width: 80px;
        height: 40px;
    }
    ${media.mobile} {
        width: 80px;
        height: 40px;
        top: 70px;
        left: 10px;
    }
    > span {
        display: flex;
        width: 50%;
        height: 100%;
        align-items: center;
        justify-content: center;
        > svg {
            animation: ${song} 2s ease-in-out infinite;
        }
    }
    > button {
        cursor: pointer;
        border: none;
        outline: none;
        background-color: ${({ theme }) => theme.colors.secondary};
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        > svg {
            font-size: 1.3rem;
        }
    }
`;
