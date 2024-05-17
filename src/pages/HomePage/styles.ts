import styled from "styled-components";
import { media } from "../../styles/customMediaQuery";

export const Container = styled.main`
    max-width: 1024px;
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${media.tablet} {
        width: 768px;
    }
    ${media.mobile} {
        width: 350px;
    }
`;

export const LogoImage = styled.img`
    display: flex;
    width: 250px;
    height: 84px;
    margin-top: 28px;
    margin-bottom: 36px;
`;
