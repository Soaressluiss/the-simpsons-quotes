import { CharacterContext } from "../../../../contexts/CharacterContext";
import { CharacterContainer } from "./styles";
import { useContext } from "react";
export interface ICharacter {
    id: number;
    image: string;
    character: string;
    quote: string;
    setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Character: React.FC<ICharacter> = ({ id, image, character, quote, setCloseModal }) => {
    const { setCharacterClicked } = useContext(CharacterContext);

    function characterClicked(id: number, image: string, character: string, quote: string) {
        setCharacterClicked({
            id,
            image,
            character,
            quote,
        });
        setCloseModal(true);
    }

    return (
        <CharacterContainer>
            <img
                src={image}
                alt={character}
                title={character}
                onClick={() => characterClicked(id, image, character, quote)}
            />
        </CharacterContainer>
    );
};
