import { useLayoutEffect } from "react";
import donut from "../../assets/donut.svg";
import msg from "../../assets/Loading...png";
import { ContainerLoading, DonutImg, MessageImg } from "./styles";

interface ILoadingScreenProps {
    hideLoading: boolean;
}

export const LoadingScreen: React.FC<ILoadingScreenProps> = ({ hideLoading }) => {
    useLayoutEffect(() => {
        document.body.style.position = "fixed";
        setTimeout(() => {
            document.body.style.position = "static";
        }, 5000);
    }, []);

    return (
        <ContainerLoading $Hide={hideLoading}>
            <MessageImg src={msg} alt="loading" />
            <DonutImg src={donut} alt="donut spinng" />
        </ContainerLoading>
    );
};
