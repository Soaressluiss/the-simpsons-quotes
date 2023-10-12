import styled from "styled-components";

interface IProps {
    isActive: boolean;
}

export const NavBar = styled.nav`
    width: 27.25rem;
    height: 4.62931rem;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0px -7px 7px 0px rgba(0, 0, 0, 0.25) inset;
    filter: drop-shadow(4px 8px 3px rgba(0, 0, 0, 0.25));
    border-radius: 50px;
    display: grid;
    place-items: center;
    position: fixed;
    bottom: 25px;
    > ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1.55rem;
    }
`;

export const IconsMenu = styled.li<IProps>`
    font-size: 2.3rem;
    cursor: pointer;
    background-color: ${({ isActive }) => (isActive ? "#00ADEF" : "transparent")};
    padding: 0.5rem;
    border-radius: 50px;
    display: grid;
    color: ${({theme})=> theme.fonts.FColorPrimary};
    place-items: center;
    &:hover{
        background-color: ${({theme})=> theme.colors.primary};
        color: ${({theme})=> theme.fonts.FColorPrimary};
    }
    >svg{
        stroke-width: .2px;
    }
`;
