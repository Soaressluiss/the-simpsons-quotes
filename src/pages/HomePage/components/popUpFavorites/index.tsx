import { FavoriteQuote, FavoriteQuoteContainer, PopUpFavoritesContainer } from "./styles";
import MyFavoritesQuotes from "../../../../assets/My Favorite Quotes.png";
import { BsHeartFill, BsX } from "react-icons/bs";
import { useContext } from "react";
import { FavoriteContext } from "../../../../contexts/FavoriteContext";

type PopUpTypes = {
    closeFavorites: boolean;
    setCloseFavorites: React.Dispatch<React.SetStateAction<boolean>>;
};
export const PopUpFavorites: React.FC<PopUpTypes> = ({ closeFavorites, setCloseFavorites }) => {
    const { favoriteData, setFavoriteData } = useContext(FavoriteContext);

    function handleDeleteQuote(id: number) {
        setFavoriteData((previous) =>
            previous.filter((salveQuote) => {
                console.log(id, salveQuote.id);
                return id !== salveQuote.id;
            }),
        );
    }
    return (
        <PopUpFavoritesContainer $CloseFavorites={closeFavorites}>
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
            <button onClick={() => setCloseFavorites(!closeFavorites)}>
                <BsX />
            </button>
        </PopUpFavoritesContainer>
    );
};
