import { BsHeart, BsHeartFill, BsX } from "react-icons/bs";
import { BtnHeart, InfoHeart, ModalBackground, ModalCharacterContainer, ModalCharacterInfo } from "./styles";
import { CharacterContext } from "../../../../contexts/CharacterContext";
import { ElementRef, useContext, useEffect, useRef } from "react";
import { FavoriteContext } from "../../../../contexts/FavoriteContext";
import { UseLocalStorage } from "../../../../hooks/useLocalStorage";

type ModalCharacterTypes = {
    closeModal: boolean;
    setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ModalCharacter: React.FC<ModalCharacterTypes> = ({ setCloseModal, closeModal }) => {
    const { characterClicked } = useContext(CharacterContext);
    const { id, image, character, quote } = characterClicked;
    const { setFavoriteData, favoriteData } = useContext(FavoriteContext);
    const { setLocalStorage } = UseLocalStorage();

    const modalRef = useRef<ElementRef<"div">>(null);
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setCloseModal(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [setCloseModal]);

    function handleAddFavorite(id: number) {
        const hasQuote = favoriteData.find((quote) => quote.id === id);

        if (!hasQuote) {
            setFavoriteData((previous) => [...previous, { id, quote }]);
            setLocalStorage("favorites", JSON.stringify([...favoriteData, { id, quote }]));
        }
    }

    function getHeartIcon(id: number) {
        const hasQuote = favoriteData.find((quote) => quote.id === id);
        return hasQuote ? <BsHeartFill style={{ fill: "red" }} /> : <BsHeart />;
    }

    return (
        <ModalBackground $CloseModal={closeModal}>
            <ModalCharacterContainer ref={modalRef} key={id}>
                <section>
                    <img src={image} alt={`Imagem do ${character}`} title={character} />
                </section>
                <ModalCharacterInfo>
                    <article>
                        <span>
                            <h2>{character}</h2>
                        </span>
                        <div>
                            <span>
                                <h3>Quote</h3>
                            </span>
                            <p>{quote}</p>
                            <BtnHeart onClick={() => handleAddFavorite(id)}>{getHeartIcon(id)}</BtnHeart>
                            <InfoHeart>salve that quote</InfoHeart>
                        </div>
                    </article>
                </ModalCharacterInfo>
                <button onClick={() => setCloseModal(false)}>
                    <BsX />
                </button>
            </ModalCharacterContainer>
        </ModalBackground>
    );
};
