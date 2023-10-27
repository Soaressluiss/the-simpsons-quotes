// import song from "../../../../assets/audio/song.mp3"

import { BsFillDashCircleFill, BsFillPlayCircleFill, BsFillPlusCircleFill, BsFillStopCircleFill } from "react-icons/bs";
import { IconSong, SongContainer } from "./styles";
import { useState } from "react";

export const SongController: React.FC = () => {
    const [select, setSelect] = useState<string>("play");

    const icons = [
        { id: 0, title: "play", icon: <BsFillPlayCircleFill />, onclick: () => {} },
        { id: 1, title: "pause", icon: <BsFillStopCircleFill />, onclick: () => {} },
        { id: 2, title: "vol+", icon: <BsFillPlusCircleFill />, onclick: () => {} },
        { id: 3, title: "vol-", icon: <BsFillDashCircleFill />, onclick: () => {} },
    ];

    return (
        <SongContainer>
            <ul>
                {icons.map((icon) => (
                    <IconSong key={icon.id} $isActive={select === icon.title} onClick={icon.onclick}>
                        {icon.icon}
                    </IconSong>
                ))}
            </ul>
        </SongContainer>
    );
};
