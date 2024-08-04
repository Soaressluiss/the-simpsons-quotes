import { BsHeart, BsHeartFill, BsX } from "react-icons/bs";
import {
    BtnHeart,
    ContainerCharacter,
    ContendCharacter,
    InfoHeart,
    ModalCharacterContainer,
    ModalCharacterInfo,
} from "./styles";
import { CharacterContext } from "../../../../contexts/CharacterContext";
import { useContext } from "react";
import { FavoriteContext } from "../../../../contexts/FavoriteContext";
import { UseLocalStorage } from "../../../../hooks/useLocalStorage";
import { IFavorite } from "../../../../types/interfaces";
import ModalContainer from "../../../../components/Dialog";

type ModalCharacterTypes = {
    openModal: boolean;
    handleModalCharacter(isOpen: boolean): void;
};
export const ModalCharacter: React.FC<ModalCharacterTypes> = ({ openModal, handleModalCharacter }) => {
    const { characterClicked } = useContext(CharacterContext);
    const { id, image, character, quote } = characterClicked;
    const { setFavoriteData, favoriteData } = useContext(FavoriteContext);
    const { setLocalStorage, getLocalStorage } = UseLocalStorage();

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

    return (
        <ModalContainer openModal={openModal} handleOpenModal={handleModalCharacter}>
            <ModalCharacterContainer key={id}>
                <ContainerCharacter>
                    <div>
                        <img src={image} alt={`Imagem do ${character}`} title={character} />
                    </div>
                </ContainerCharacter>
                <ModalCharacterInfo>
                    <ContendCharacter>
                        <h2>{character}</h2>
                        <div>
                            <h3>Quote</h3>
                            <span>{quote}</span>
                            <BtnHeart onClick={() => handleFavorite(quote)}>{getHeartIcon(quote)}</BtnHeart>
                            <InfoHeart>salve that quote</InfoHeart>
                        </div>
                    </ContendCharacter>
                </ModalCharacterInfo>
                <button onClick={() => handleModalCharacter(false)}>
                    <BsX />
                </button>
            </ModalCharacterContainer>
        </ModalContainer>
    );
};
