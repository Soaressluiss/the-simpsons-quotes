import React, { useContext, useState, useCallback } from "react";
import { IconsMenu, NavBar } from "./styles";
import { BsHeart, BsMusicNoteBeamed, BsMoon, BsSun, BsArrowUp, BsSearch } from "react-icons/bs";
import { SongController } from "../SongController";
import dark from "../../../../styles/themes/dark";
import light from "../../../../styles/themes/light";
import { CharacterContext } from "../../../../contexts/CharacterContext";
import { UseLocalStorage } from "../../../../hooks/useLocalStorage";

type MenuProps = {
    handleModalFavorite(isOpen: boolean): void;
    handleToggleSeach: (ishide: boolean) => void;
    invisibleController: boolean;
    minimizeSongController(isvisible: boolean): void;
    controlSongRef: React.RefObject<HTMLAudioElement>;
};

type ActiveType = "Favorites" | "Music" | "Theme" | "Search" | "Top" | "";

export const Menu: React.FC<MenuProps> = ({
    handleModalFavorite,
    handleToggleSeach,
    invisibleController,
    minimizeSongController,
    controlSongRef,
}) => {
    const [active, setActive] = useState<ActiveType>("");
    const [showControllerSong, setShowControllerSong] = useState(false);
    const { setLocalStorage } = UseLocalStorage();
    const { setCurrentTheme, currentTheme } = useContext(CharacterContext);

    const handleTheme = useCallback(() => {
        setCurrentTheme((prevTheme) => {
            const newTheme = prevTheme.name === "light" ? dark : light;
            setLocalStorage("theme", JSON.stringify(newTheme));
            return newTheme;
        });
        setActive("Theme");
    }, [setCurrentTheme, setLocalStorage]);

    const handleSearch = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActive("Search");
        window.scrollY === 0 && handleToggleSeach(true);

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            scrollPosition === 0 ? handleToggleSeach(true) : handleToggleSeach(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    };

    const handleTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActive("Top");
    };

    const handleFavorites = () => {
        setActive("Favorites");
        handleModalFavorite(true);
    };

    const handleSong = () => {
        setActive("Music");
        setShowControllerSong(!showControllerSong);
        minimizeSongController(false);
    };

    const Icons = [
        { id: 0, title: "Favorites", icon: <BsHeart />, onclick: handleFavorites },
        {
            id: 1,
            title: "Theme",
            icon: currentTheme.name === "light" ? <BsSun /> : <BsMoon />,
            onclick: handleTheme,
        },
        { id: 2, title: "Music", icon: <BsMusicNoteBeamed />, onclick: handleSong },
        { id: 3, title: "Search", icon: <BsSearch />, onclick: handleSearch },
        { id: 4, title: "Top", icon: <BsArrowUp />, onclick: handleTop },
    ];

    return (
        <NavBar>
            <ul>
                {Icons.map(({ icon, id, onclick, title }) => (
                    <IconsMenu key={id} onClick={onclick} $isActive={active === title} title={title}>
                        {icon}
                    </IconsMenu>
                ))}
            </ul>
            {showControllerSong && (
                <SongController
                    controlSongRef={controlSongRef}
                    invisibleController={invisibleController}
                    minimizeSongController={minimizeSongController}
                />
            )}
        </NavBar>
    );
};
