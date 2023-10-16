import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const LoadingStyle = styled.svg`
    animation: ${rotate} 1s ease forwards;
    z-index: 1;
`;
