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
    ${media.tablet} {
        width: 48rem;
    }
    ${media.mobile} {
        width: 21.875rem;
    }
`;

export const LogoImage = styled.img`
    display: flex;
    width: 15.625rem;
    height: 5.25rem;
    margin-top: 1.75rem;
    margin-bottom: 2.25rem;
`;
