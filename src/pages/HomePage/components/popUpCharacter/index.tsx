import { BsHeart, BsX } from "react-icons/bs";
import { BtnHeart, InfoHeart, PopUpCharacterContainer, PopUpCharacterContent, PopUpCharacterInfo } from "./styles";
import { CharacterContext } from "../../../../contexts/CharacterContext";
import { useContext } from "react";

type PopUpTypes = {
    closeModal: boolean;
    setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export const PopUpCharacter: React.FC<PopUpTypes> = ({ setCloseModal, closeModal }) => {
    const { characterClicked } = useContext(CharacterContext);
    const { id, image, character,quote } = characterClicked;
    return (
        <PopUpCharacterContainer $CloseModal={closeModal}>
            <PopUpCharacterContent key={id}>
                <section>
                <img src={image} alt={`Imagem do ${character}`} title={character}/>
                </section>
                <PopUpCharacterInfo>
                    <article>
                        <span>
                            <h2>{character}</h2>
                        </span>
                        <div>
                            <span>
                                <h3>Quote</h3>
                            </span>
                            <p>“{quote}”</p>
                        </div>
                        <BtnHeart>
                            <BsHeart />
                        </BtnHeart>
                        <InfoHeart>salve that quote</InfoHeart>
                    </article>
                </PopUpCharacterInfo>
                <button onClick={() => setCloseModal(!closeModal)}>
                    <BsX />
                </button>
            </PopUpCharacterContent>
        </PopUpCharacterContainer>
    );
};
