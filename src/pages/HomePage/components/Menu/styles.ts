import styled from "styled-components";
import { media } from "../../../../styles/customMediaQuery";

interface IProps {
    $isActive: boolean | string;
}

export const NavBar = styled.nav`
    width: 20rem;
    height: 3.62931rem;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0px -7px 7px 0px rgba(0, 0, 0, 0.25) inset;
    filter: drop-shadow(4px 8px 3px rgba(0, 0, 0, 0.25));
    border-radius: 50px;
    display: grid;
    place-items: center;
    position: fixed;
    bottom: 25px;
    z-index: 99;

    ${media.tablet} {
        width: 18rem;
        height: 2.875rem;
    }

    ${media.mobile} {
        width: 14rem;
    }
    > ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1.55rem;

        ${media.tablet} {
            gap: 1rem;
        }
        ${media.mobile} {
            gap: 0.6rem;
        }
    }
`;

export const IconsMenu = styled.li<IProps>`
    font-size: 2.3rem;
    cursor: pointer;
    background-color: ${({ $isActive }) => ($isActive ? "#00ADEF" : "transparent")};
    padding: 0.5rem;
    border-radius: 50px;
    display: grid;
    color: ${({ theme }) => theme.fonts.FColorPrimary};
    place-items: center;
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.fonts.FColorPrimary};
    }
    > svg {
        stroke-width: 0.2px;
        font-size: 1.6rem;
    }
`;
