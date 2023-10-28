import React, { useState } from "react";
import { IconsMenu, NavBar } from "./styles";
import { BsHouse, BsHeart, BsMusicNoteBeamed, BsMoon } from "react-icons/bs";
import { SongController } from "../SongController";

type MenuProps = {
    setCloseFavorites: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Menu: React.FC<MenuProps> = ({ setCloseFavorites }) => {
    const [active, setActive] = useState("Home");
    const [showControllerSong, setShowControllerSong] = useState(false);

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

    const Icons = [
        { id: 0, title: "Home", icon: <BsHouse />, onclick: () => handleHome() },
        { id: 1, title: "Favorites", icon: <BsHeart />, onclick: () => handleFavorites() },
        { id: 2, title: "Music", icon: <BsMusicNoteBeamed />, onclick: () => handleSong() },
        { id: 3, title: "Theme", icon: <BsMoon />, onclick: () => {} },
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
