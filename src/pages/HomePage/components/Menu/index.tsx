import React, { useState } from "react";
import { IconsMenu, NavBar } from "./styles";
import { BsHouse, BsHeart, BsMusicNoteBeamed, BsMoon } from "react-icons/bs";

type MenuProps = {
    setCloseFavorites: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Menu: React.FC<MenuProps> = ({ setCloseFavorites }) => {
    const [active, setActive] = useState("home");

    function handleFavorites() {
        setActive("favorites");
        setCloseFavorites(true);
    }

    const Icons = [
        { id: 0, title: "home", icon: <BsHouse />, onclick: () => setActive("home") },
        { id: 1, title: "favorites", icon: <BsHeart />, onclick: () => handleFavorites() },
        { id: 2, title: "music", icon: <BsMusicNoteBeamed />, onclick: () => {} },
        { id: 3, title: "theme", icon: <BsMoon />, onclick: () => {} },
    ];

    return (
        <NavBar>
            <ul>
                {Icons.map(({ icon, id, onclick, title }) => (
                    <IconsMenu key={id} onClick={onclick} $isActive={active === title}>
                        {icon}
                    </IconsMenu>
                ))}
            </ul>
        </NavBar>
    );
};
