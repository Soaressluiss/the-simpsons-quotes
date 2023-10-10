import styled from "styled-components";

export const CharacterContainer = styled.figure`
    width: 278px;
    height: 395px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.25);
    outline: none;
    cursor: pointer;
    &:active {
        transition: all ease;
        transform: scale(0.99);
    }
    &:focus {
        outline: 2px ${({ theme }) => theme.colors.grayPlatinum} solid;
    }

    > img {
        width: 222px;
        height: 378px;
    }
`;
