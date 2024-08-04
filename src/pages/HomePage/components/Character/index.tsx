import { CharacterContext } from "../../../../contexts/CharacterContext";
import { CharacterContainer } from "./styles";
import { useContext } from "react";
export interface ICharacter {
    id: number;
    image: string;
    character: string;
    quote: string;
    handleModalCharacter(isOpen: boolean): void;
}
export const Character: React.FC<ICharacter> = ({ id, image, character, quote, handleModalCharacter }) => {
    const { setCharacterClicked } = useContext(CharacterContext);

    function characterClicked(id: number, image: string, character: string, quote: string) {
        setCharacterClicked({
            id,
            image,
            character,
            quote,
        });
        handleModalCharacter(true);
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
