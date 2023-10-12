import { CharacterContainer } from "./styles";

interface ICharacterProps {
    image: string;
    character: string;
}
export const Character: React.FC<ICharacterProps> = ({ image, character }) => {
    return (
        <CharacterContainer tabIndex={3}>
                <img  src={image} alt={character}  title={character}/>
        </CharacterContainer>
    );
};
