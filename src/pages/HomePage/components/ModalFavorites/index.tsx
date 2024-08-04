import { ButtonCLose, ButtonDeleteAll, FavoriteQuote, FavoriteQuoteContainer, ModalFavoritesContainer } from "./styles";
import MyFavoritesQuotes from "../../../../assets/My Favorite Quotes.png";
import { BsTrash, BsX } from "react-icons/bs";
import { useContext } from "react";
import { FavoriteContext } from "../../../../contexts/FavoriteContext";
import { UseLocalStorage } from "../../../../hooks/useLocalStorage";
import { IFavorite } from "../../../../types/interfaces";
import ModalContainer from "../../../../components/Dialog";

type ModalFavoritesTypes = {
    openFavorites: boolean;
    handleModalFavorite(isOpen: boolean): void;
};
export const ModalFavorites: React.FC<ModalFavoritesTypes> = ({ openFavorites, handleModalFavorite }) => {
    const { favoriteData, setFavoriteData } = useContext(FavoriteContext);
    const { setLocalStorage, getLocalStorage, deleteLocalStorage } = UseLocalStorage();

    function handleDeleteQuote(quote: string) {
        setFavoriteData((previous) =>
            previous.filter((salveQuote) => {
                return quote !== salveQuote.quote;
            }),
        );

        const hasQuoteLocalStorage = getLocalStorage("favorites");
        if (hasQuoteLocalStorage) {
            const parsedFavorites = JSON.parse(hasQuoteLocalStorage);
            const itemToDeleteIndex = parsedFavorites.find((item: IFavorite) => {
                return item.quote === quote;
            });

            if (itemToDeleteIndex !== -1) {
                parsedFavorites.splice(itemToDeleteIndex, 1);
                setLocalStorage("favorites", JSON.stringify(parsedFavorites));
            }
        }
    }
    function handleDeleteAllQuotes() {
        setFavoriteData([]);
        deleteLocalStorage("favorites");
    }
    function handleopenModal() {
        handleModalFavorite(false);
    }
    return (
        <ModalContainer openModal={openFavorites} handleOpenModal={handleModalFavorite}>
            <ModalFavoritesContainer>
                <img src={MyFavoritesQuotes} alt="my favorite quote image" />
                <FavoriteQuoteContainer>
                    {favoriteData.length > 0
                        ? favoriteData.map((item) => (
                              <FavoriteQuote key={item.quote}>
                                  <h3>{item.quote}</h3>
                                  <button onClick={() => handleDeleteQuote(item.quote)} title="delete this quote">
                                      <BsTrash />
                                  </button>
                              </FavoriteQuote>
                          ))
                        : null}
                </FavoriteQuoteContainer>
                <ButtonCLose onClick={() => handleopenModal()} title="close favorite modal">
                    <BsX />
                </ButtonCLose>
                <ButtonDeleteAll onClick={() => handleDeleteAllQuotes()} title="delete all quotes">
                    <BsTrash />
                </ButtonDeleteAll>
            </ModalFavoritesContainer>
        </ModalContainer>
    );
};
