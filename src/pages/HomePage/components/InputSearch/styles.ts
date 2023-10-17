import styled from "styled-components";

export const ContainerSearch = styled.form`
    width: 935px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
`;

export const Input = styled.input`
    width: 828px;
    height: 80px;
    border-radius: 15px;
    background: ${({ theme }) => theme.colors.grayPlatinum};
    outline: none;
    border: none;
    padding: 1rem;
    font-size: 1.75rem;
    font-family: ${({ theme }) => theme.fonts.fontPrimary};
    &:focus {
        outline: 3px ${({ theme }) => theme.colors.secondary} solid;
    }

    &::placeholder {
        font-family: ${({ theme }) => theme.fonts.fontPrimary};
        font-size: 1.75rem;
        font-weight: 400;
        letter-spacing: 3.36px;
        color: ${({ theme }) => theme.fonts.FColorPrimary};
    }
`;

export const Elipse = styled.span`
    display: block;
    width: 83px;
    height: 77px;
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: -4px -8px 8px 0px rgba(0, 0, 0, 0.25) inset;
    border-radius: 50%;
    outline: none;
    display: grid;
    place-items: center;
    font-size: 2rem;
    color: ${({ theme }) => theme.fonts.FColorPrimary};
    cursor: pointer;
    &:active {
        transition: 0.4s ease;
        transform: scale(0.95);
        font-size: 1.9rem;
    }
    &:focus {
        outline: 2px ${({ theme }) => theme.colors.grayPlatinum} solid;
    }

`;
