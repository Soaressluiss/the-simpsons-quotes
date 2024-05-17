import {
    ButtonCLose,
    ButtonDeleteAll,
    FavoriteQuote,
    FavoriteQuoteContainer,
    ModalBackground,
    PopUpFavoritesContainer,
} from "./styles";
import MyFavoritesQuotes from "../../../../assets/My Favorite Quotes.png";
import { BsHeartFill, BsTrash, BsX } from "react-icons/bs";
import { useContext } from "react";
import { FavoriteContext } from "../../../../contexts/FavoriteContext";
import { UseLocalStorage } from "../../../../hooks/useLocalStorage";
import { IFavorite } from "../../../../types/interfaces";

type PopUpTypes = {
    closeFavorites: boolean;
    setCloseFavorites: React.Dispatch<React.SetStateAction<boolean>>;
};
export const PopUpFavorites: React.FC<PopUpTypes> = ({ closeFavorites, setCloseFavorites }) => {
    const { favoriteData, setFavoriteData } = useContext(FavoriteContext);
    const { setLocalStorage, getLocalStorage, deleteLocalStorage } = UseLocalStorage();

    function handleDeleteQuote(id: number) {
        setFavoriteData((previous) =>
            previous.filter((salveQuote) => {
                return id !== salveQuote.id;
            }),
        );

        const hasQuoteLocalStorage = getLocalStorage("favorites");
        if (hasQuoteLocalStorage) {
            const parsedFavorites = JSON.parse(hasQuoteLocalStorage);
            const itemToDeleteIndex = parsedFavorites.findIndex((item: IFavorite) => {
                return item.id === id;
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
    return (
        <ModalBackground $CloseFavorites={closeFavorites}>
            <PopUpFavoritesContainer>
                <img src={MyFavoritesQuotes} alt="my favorite quote image" />
                <FavoriteQuoteContainer>
                    {favoriteData.length > 0
                        ? favoriteData.map((item) => (
                              <FavoriteQuote key={item.id}>
                                  <h3>{item.quote}</h3>

                                  <button onClick={() => handleDeleteQuote(item.id)}>
                                      <BsHeartFill />
                                  </button>
                              </FavoriteQuote>
                          ))
                        : null}
                </FavoriteQuoteContainer>
                <ButtonCLose onClick={() => setCloseFavorites(!closeFavorites)} title="close Favorite PopUp">
                    <BsX />
                </ButtonCLose>
                <ButtonDeleteAll onClick={() => handleDeleteAllQuotes()} title="delete all quotes">
                    <BsTrash />
                </ButtonDeleteAll>
            </PopUpFavoritesContainer>
        </ModalBackground>
    );
};
