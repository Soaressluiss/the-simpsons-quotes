import { useState } from "react";
import Logo from "../../assets/Logo.png";
import { Dashboard } from "./components/Dashboard";
import { InputSeach } from "./components/InputSearch";
import { Menu } from "./components/Menu";
import { ModalCharacter } from "./components/ModalCharacter";
import { Container, LogoImage } from "./styles";
import { ModalFavorites } from "./components/ModalFavorites";
import { LoadingScreen } from "../../components/LoadingScreen";

export const HomePage: React.FC = () => {
    const [closeModalCharacter, setCloseModalCharacter] = useState<boolean>(false);
    const [closeModalFavorites, setCloseModalFavorites] = useState<boolean>(false);
    const [hideLoading, setHideLoading] = useState(true);

    setTimeout(() => {
        setHideLoading(false);
    }, 4000);

    return (
        <>
            <LoadingScreen hideLoading={hideLoading} />
            <ModalCharacter closeModal={closeModalCharacter} setCloseModal={setCloseModalCharacter} />
            <ModalFavorites closeFavorites={closeModalFavorites} setCloseFavorites={setCloseModalFavorites} />
            <Container>
                <LogoImage src={Logo} alt="logo do site" />
                <Menu setCloseFavorites={setCloseModalFavorites} />
                <InputSeach />
                <Dashboard setCloseModal={setCloseModalCharacter} />
            </Container>
        </>
    );
};
