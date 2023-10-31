import { createGlobalStyle } from "styled-components";
import ErrorImage from "../../assets/error 404.png";
import { useNavigate } from "react-router-dom";
import { ContainerErroPage, ButtonBackHome } from "./styles";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
`;

export const ErrorPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <GlobalStyle />
            <ContainerErroPage>
                <img src={ErrorImage} alt="dfdsd" />
                <ButtonBackHome onClick={() => navigate("/")}>HOME</ButtonBackHome>
            </ContainerErroPage>
        </>
    );
};
