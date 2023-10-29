import React, { useContext, useState } from "react";
import { IconsMenu, NavBar } from "./styles";
import { BsHouse, BsHeart, BsMusicNoteBeamed, BsMoon, BsSun } from "react-icons/bs";
import { SongController } from "../SongController";
import dark from "../../../../styles/themes/dark";
import light from "../../../../styles/themes/light";
import { CharacterContext } from "../../../../contexts/CharacterContext";
import { UseLocalStorage } from "../../../../hooks/useLocalStorage";

type MenuProps = {
    setCloseFavorites: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Menu: React.FC<MenuProps> = ({ setCloseFavorites }) => {
    const [active, setActive] = useState("Home");
    const [showControllerSong, setShowControllerSong] = useState(false);
    const { setLocalStorage } = UseLocalStorage();

    function handleHome() {
        window.location.reload();
        setActive("Home");
    }
    function handleFavorites() {
        setActive("Favorites");
        setCloseFavorites(true);
    }
    function handleSong() {
        setActive("Music");
        setShowControllerSong(!showControllerSong);
    }
    const { setCurrentTheme, currentTheme } = useContext(CharacterContext);

    function handleTheme() {
        setCurrentTheme((prevTheme) => {
            const newTheme = prevTheme.name === "light" ? dark : light;
            setLocalStorage("theme", JSON.stringify(newTheme));
            return newTheme;
        });
    }

    const Icons = [
        { id: 0, title: "Home", icon: <BsHouse />, onclick: () => handleHome() },
        { id: 1, title: "Favorites", icon: <BsHeart />, onclick: () => handleFavorites() },
        { id: 2, title: "Music", icon: <BsMusicNoteBeamed />, onclick: () => handleSong() },
        {
            id: 3,
            title: "Theme",
            icon: currentTheme.name === "light" ? <BsSun /> : <BsMoon />,
            onclick: () => handleTheme(),
        },
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
            {showControllerSong && <SongController />}
        </NavBar>
    );
};
