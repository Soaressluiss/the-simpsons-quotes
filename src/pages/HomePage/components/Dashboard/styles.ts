import styled from "styled-components";
import { media } from "../../../../styles/customMediaQuery";

export const DashboardContainer = styled.section`
    width: 95%;
    height: max-content;
    padding: 3rem 0;
    margin-top: 70px;
    margin-bottom: 50px;
    border-radius: 31px;
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 19px 19px 16px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${media.tablet}{
        width: 80%;
    }
    > section {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
        flex-direction: row; 
        gap: 32px;

        ${media.tablet}{
            width: max-content;
            display: grid;
            grid-row-gap: 2rem;
            grid-column-gap: 3rem;
            grid-template-columns: 1fr 1fr;  
            gap: 2rem;
        }

        ${media.mobile}{
            grid-template-columns: 1fr;
        }
    }
`;
