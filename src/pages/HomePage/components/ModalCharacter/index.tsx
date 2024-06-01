import { BsHeart, BsHeartFill, BsX } from "react-icons/bs";
import { BtnHeart, InfoHeart, ModalBackground, ModalCharacterContainer, ModalCharacterInfo } from "./styles";
import { CharacterContext } from "../../../../contexts/CharacterContext";
import { ElementRef, useContext, useEffect, useRef } from "react";
import { FavoriteContext } from "../../../../contexts/FavoriteContext";
import { UseLocalStorage } from "../../../../hooks/useLocalStorage";
import { IFavorite } from "../../../../types/interfaces";

type ModalCharacterTypes = {
    closeModal: boolean;
    setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ModalCharacter: React.FC<ModalCharacterTypes> = ({ setCloseModal, closeModal }) => {
    const { characterClicked } = useContext(CharacterContext);
    const { id, image, character, quote } = characterClicked;
    const { setFavoriteData, favoriteData } = useContext(FavoriteContext);
    const { setLocalStorage, getLocalStorage } = UseLocalStorage();

    const modalRef = useRef<ElementRef<"div">>(null);
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setCloseModal(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        document.body.style.overflow = "auto";
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [setCloseModal]);

    function removeFavoriteQuote(quote: string) {
        setFavoriteData((previous) => previous.filter((salveQuote) => quote !== salveQuote.quote));

        const hasQuoteLocalStorage = getLocalStorage("favorites");
        if (hasQuoteLocalStorage) {
            const parsedFavorites = JSON.parse(hasQuoteLocalStorage);
            const updatedFavorites = parsedFavorites.filter((item: IFavorite) => item.quote !== quote);
            setLocalStorage("favorites", JSON.stringify(updatedFavorites));
        }
    }

    function addFavoriteQuote(quote: string) {
        setFavoriteData((previous) => {
            const updatedFavorites = [...previous, { quote }];
            setLocalStorage("favorites", JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    }
    function handleFavorite(quote: string) {
        const hasQuote = favoriteData.find((favorite) => favorite.quote === quote);
        hasQuote ? removeFavoriteQuote(quote) : addFavoriteQuote(quote);
    }

    function getHeartIcon(quote: string) {
        const hasQuote = favoriteData.find((favorite) => favorite.quote === quote);
        return hasQuote ? <BsHeartFill style={{ fill: "red" }} /> : <BsHeart />;
    }
    function handleCloseModal() {
        document.body.style.overflow = "auto";
        setCloseModal(false);
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
                            <BtnHeart onClick={() => handleFavorite(quote)}>{getHeartIcon(quote)}</BtnHeart>
                            <InfoHeart>salve that quote</InfoHeart>
                        </div>
                    </article>
                </ModalCharacterInfo>
                <button onClick={() => handleCloseModal()}>
                    <BsX />
                </button>
            </ModalCharacterContainer>
        </ModalBackground>
    );
};
