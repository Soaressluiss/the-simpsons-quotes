import Logo from "../../assets/Logo.png";
import { InputSeach } from "./components/InputSearch";
import { Container, LogoImage } from "./styles";

export const HomePage: React.FC = () => {
    return (
        <Container>
            <LogoImage src={Logo} alt="" />
            <InputSeach />
        </Container>
    );
};
