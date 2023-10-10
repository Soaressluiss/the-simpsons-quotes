import styled from "styled-components";

export const DashboardContainer = styled.section`
    width: 100%;
    height: max-content;
    padding: 3rem 0;
    margin-top: 86px;
    margin-bottom: 50px;
    border-radius: 31px;
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 19px 19px 16px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > section {
        display: flex;
        width: 1023px;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 32px 48px;
        flex-wrap: wrap;
    }
`;
