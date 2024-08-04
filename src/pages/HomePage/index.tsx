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
    const [openModalCharacter, setopenModalCharacter] = useState<boolean>(false);
    const [openModalFavorites, setopenModalFavorites] = useState<boolean>(false);
    const [hideLoading, setHideLoading] = useState(true);

    function handleModalCharacter(isOpen: boolean) {
        setopenModalCharacter(isOpen);
    }
    function handleModalFavorite(isOpen: boolean) {
        setopenModalFavorites(isOpen);
    }

    setTimeout(() => {
        setHideLoading(false);
    }, 5000);

    function reloadPage() {
        window.location.reload();
    }

    return (
        <>
            <LoadingScreen hideLoading={hideLoading} />
            <ModalCharacter openModal={openModalCharacter} handleModalCharacter={handleModalCharacter} />
            <ModalFavorites openFavorites={openModalFavorites} handleModalFavorite={handleModalFavorite} />
            <Container>
                <LogoImage onClick={() => reloadPage()} src={Logo} alt="logo" />
                <Menu handleModalFavorite={handleModalFavorite} />
                <InputSeach />
                <Dashboard handleModalCharacter={handleModalCharacter} />
            </Container>
        </>
    );
};
