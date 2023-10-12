import { useState } from "react";
import { IconsMenu, NavBar } from "./styles";
import { BsHouse, BsHeart, BsMusicNoteBeamed, BsMoon } from "react-icons/bs";

export const Menu: React.FC = () => {
    const [active, setActive] = useState("home");

    const Icons = [
        { id: 0, title: "home", icon: <BsHouse />, onclick: () => setActive("home") },
        { id: 1, title: "favorites", icon: <BsHeart />, onclick: () => setActive("favorites") },
        { id: 2, title: "music", icon: <BsMusicNoteBeamed />, onclick: () => {} },
        { id: 3, title: "theme", icon: <BsMoon />, onclick: () => {} },
    ];

    return (
        <NavBar>
            <ul>
                {Icons.map(({ icon, id, onclick, title }) => (
                    <IconsMenu key={id} onClick={onclick} isActive={active === title}>
                        {icon}
                    </IconsMenu>
                ))}
            </ul>
        </NavBar>
    );
};
