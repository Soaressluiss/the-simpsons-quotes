import song from "../../../../assets/audio/song.mp3";

import { BsFillDashCircleFill, BsFillPlayCircleFill, BsFillPlusCircleFill, BsFillStopCircleFill } from "react-icons/bs";
import { IconSong, SongContainer, Audio } from "./styles";
import { useRef, useState } from "react";

export const SongController: React.FC = () => {
    const [select, setSelect] = useState<string>("");

    const controlSongRef = useRef<HTMLAudioElement>(null);

    function handlePlay() {
        if (controlSongRef.current) {
            controlSongRef.current.play();
            controlSongRef.current.volume = 0.3;
            setSelect("play");
        }
    }
    function handleStop() {
        if (controlSongRef.current) {
            controlSongRef.current.pause();
            setSelect("pause");
        }
    }
    function incrementVol() {
        if (controlSongRef.current) {
            setSelect("vol+");
            if (controlSongRef.current.volume <= 0.98) {
                controlSongRef.current.volume += 0.1;
            } else {
                controlSongRef.current.volume = 0.9;
            }
        }
    }
    function decrementVol() {
        if (controlSongRef.current) {
            setSelect("vol-");
            if (controlSongRef.current.volume >= 0.1) {
                controlSongRef.current.volume -= 0.1;
            } else {
                controlSongRef.current.volume = 0;
            }
        }
    }
    const icons = [
        { id: 0, title: "play", icon: <BsFillPlayCircleFill />, onclick: () => handlePlay() },
        { id: 1, title: "pause", icon: <BsFillStopCircleFill />, onclick: () => handleStop() },
        { id: 2, title: "vol+", icon: <BsFillPlusCircleFill />, onclick: () => incrementVol() },
        { id: 3, title: "vol-", icon: <BsFillDashCircleFill />, onclick: () => decrementVol() },
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
            <Audio loop ref={controlSongRef} controls>
                <source src={song} type="audio/mpeg" />
            </Audio>
        </SongContainer>
    );
};
