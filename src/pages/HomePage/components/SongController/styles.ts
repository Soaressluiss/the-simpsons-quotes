import styled, { keyframes } from "styled-components";

interface IIconProps {
    $isActive: string | boolean;
}
export const fadeUp = keyframes`
    from {opacity: 0; transform: translateY(50px)}
    to { opacity:1; transform: translateY(0)}
`;
export const SongContainer = styled.section`
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 200px;
    height: 70px;
    position: absolute;
    right: 100px;
    bottom: 110px;
    border-radius: 5px;
    display: grid;
    place-items: center;
    animation: ${fadeUp} 0.4s ease;
    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 70px;
        right: 60px;
        border-width: 20px;
        border-style: solid;
        border-color: ${({ theme }) => theme.colors.secondary} transparent transparent transparent;
        transform: translateX(-50%);
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
    font-size: 2rem;
    cursor: pointer;
    color: ${({ theme }) => theme.fonts.FColorPrimary};
    background-color: ${({ $isActive }) => ($isActive ? "#00ADEF" : "transparent")};
    display: grid;
    place-items: center;
    border-radius: 50%;
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        transition: all .4s ease;
    }
`;
