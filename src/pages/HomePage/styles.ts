import styled from "styled-components";
import { media } from "../../styles/customMediaQuery";

export const Container = styled.main`
    max-width: 64rem;
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    ${media.mobile} {
        gap: 1.5rem;
    }
`;

export const LogoImage = styled.img`
    display: flex;
    width: 15.625rem;
    height: 5.25rem;
    margin-top: 1.75rem;
    cursor: pointer;
`;
