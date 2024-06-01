import styled from "styled-components";
import { keyframes } from "styled-components";

interface ILoadingProps {
    $Hide: boolean;
}

export const ContainerLoading = styled.main<ILoadingProps>`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: ${({ $Hide }) => ($Hide ? "flex" : "none")};
    position: absolute;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: 999;
`;

const Spin = keyframes`
    from { transform: rotate(0)}
    to { transform: rotate(360deg)}
`;

export const DonutImg = styled.img`
    width: 100px;
    animation: ${Spin} 1.2s linear infinite;
`;
export const MessageImg = styled.img`
    width: 250px;
`;
