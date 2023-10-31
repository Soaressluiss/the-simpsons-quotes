import styled from "styled-components";
import { media } from "../../styles/customMediaQuery";

export const Container = styled.main`
    width: 1000px;
    height: max-content;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${media.tablet}{
        width: 768px;
    }
    ${media.mobile}{
        width: 350px;
    }
`;

export const LogoImage = styled.img`
    display: flex;
    width: 250px;
    margin-top: 28px;
    margin-bottom: 36px;
`;

