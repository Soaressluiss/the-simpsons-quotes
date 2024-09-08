import { FloatSong } from "./style";
import { BsFillStopCircleFill, BsMusicNoteBeamed } from "react-icons/bs";

interface Props {
    toggleFloatSong: boolean;
    controlSongRef: React.RefObject<HTMLAudioElement>;
    minimizeSongController(isvisible: boolean): void;
}
export const FloatController: React.FC<Props> = ({ controlSongRef, toggleFloatSong, minimizeSongController }) => {
    function handleStop() {
        if (controlSongRef.current) {
            controlSongRef.current.pause();
            minimizeSongController(false);
        }
    }

    return (
        <FloatSong $toggleFloatSong={toggleFloatSong}>
            <span>
                <BsMusicNoteBeamed />
            </span>
            <button onClick={() => handleStop()}>
                <BsFillStopCircleFill />
            </button>
        </FloatSong>
    );
};
