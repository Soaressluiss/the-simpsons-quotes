import donut from "../../assets/donut.svg";
import msg from "../../assets/Loading...png";
import { ContainerLoading, DonutImg, MessageImg } from "./styles";

interface ILoadingScreenProps {
    hideLoading: boolean;
}

export const LoadingScreen: React.FC<ILoadingScreenProps> = ({ hideLoading }) => {
    return (
        <ContainerLoading $Hide={hideLoading}>
            <MessageImg src={msg} alt="loading" />
            <DonutImg src={donut} alt="donut spinng" />
        </ContainerLoading>
    );
};
