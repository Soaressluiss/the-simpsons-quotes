import styled from "styled-components";
import { media } from "../../../../styles/customMediaQuery";
import { fadeUp } from "../SongController/styles";

export const CharacterContainer = styled.figure`
    width: 250px;
    height: 345px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.25);
    outline: none;
    cursor: pointer;
    display: grid;
    place-items: center;
    animation: ${fadeUp} 1s ease forwards;
    &:active {
        transition: all ease;
        transform: scale(0.99);
    }
    &:focus {
        outline: 3px ${({ theme }) => theme.colors.grayPlatinum} solid;
    }
    > img {
        width: 200px;
        height: 300px;
    }
    ${media.tablet} {
        width: 240px;
    }
`;
