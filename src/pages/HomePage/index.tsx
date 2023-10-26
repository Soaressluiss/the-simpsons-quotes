import { useState } from "react";
import Logo from "../../assets/Logo.png";
import { Dashboard } from "./components/Dashboard";
import { InputSeach } from "./components/InputSearch";
import { Menu } from "./components/Menu";
import { PopUpCharacter } from "./components/popUpCharacter";
import { Container, LogoImage } from "./styles";
import { PopUpFavorites } from "./components/popUpFavorites";

export const HomePage: React.FC = () => {
    const [closeModal, setCloseModal] = useState<boolean>(false);
    const [closeFavorites, setCloseFavorites] = useState<boolean>(false);

    return (
        <>
            <Container>
                <PopUpCharacter closeModal={closeModal} setCloseModal={setCloseModal} />
                <PopUpFavorites closeFavorites={closeFavorites} setCloseFavorites={setCloseFavorites} />
                <LogoImage src={Logo} alt="logo do site" />
                <Menu setCloseFavorites={setCloseFavorites} />
                <InputSeach />
                <Dashboard setCloseModal={setCloseModal} />
            </Container>
        </>
    );
};
