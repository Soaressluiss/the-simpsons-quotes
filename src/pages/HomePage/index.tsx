import Logo from "../../assets/Logo.png";
import { Dashboard } from "./components/Dashboard";
import { InputSeach } from "./components/InputSearch";
import { Menu } from "./components/Menu";
import { Container, LogoImage } from "./styles";

export const HomePage: React.FC = () => {
    return (
        <Container>
            <LogoImage src={Logo} alt="logo do site" />
            <Menu/>
            <InputSeach />
            <Dashboard/>
        </Container>
    );
};