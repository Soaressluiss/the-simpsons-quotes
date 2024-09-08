import { useRef, useState } from "react";
import Logo from "../../assets/Logo.svg";
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
    const [hideLoading, setHideLoading] = useState<boolean>(true);
    const [toggleSearch, setToggleSearch] = useState<boolean>(false);
    const [invisibleController, setInvisibleController] = useState<boolean>(false);

    const controlSongRef = useRef<HTMLAudioElement>(null);
    function minimizeSongController(isvisible: boolean) {
        setInvisibleController(isvisible);
    }
    const handleToggleSeach = (ishide: boolean) => setToggleSearch(ishide);

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
                <Menu
                    controlSongRef={controlSongRef}
                    invisibleController={invisibleController}
                    minimizeSongController={minimizeSongController}
                    handleToggleSeach={handleToggleSeach}
                    handleModalFavorite={handleModalFavorite}
                />
                <InputSeach toggleSearch={toggleSearch} />
                <Dashboard
                    controlSongRef={controlSongRef}
                    handleModalCharacter={handleModalCharacter}
                    toggleFloatSong={invisibleController}
                    minimizeSongController={minimizeSongController}
                />
            </Container>
        </>
    );
};
