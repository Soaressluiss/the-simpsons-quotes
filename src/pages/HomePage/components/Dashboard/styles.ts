import styled from "styled-components";
import { media } from "../../../../styles/customMediaQuery";

export const DashboardContainer = styled.section`
    width: 90%;
    height: max-content;
    padding: 3rem 0;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 19px 19px 16px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    ${media.mobile} {
        padding: 1.25rem;
    }
    > section {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 2rem;

        ${media.tablet} {
            width: max-content;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }

        ${media.mobile} {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 590px) {
            grid-template-columns: 1fr;
        }
    }
`;
