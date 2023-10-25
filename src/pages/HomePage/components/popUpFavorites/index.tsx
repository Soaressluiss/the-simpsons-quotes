import { FavoriteQuote, FavoriteQuoteContainer, PopUpFavoritesContainer } from "./styles";
import MyFavoritesQuotes from "../../../../assets/My Favorite Quotes.png";
import { BsHeartFill, BsX } from "react-icons/bs";

export const PopUpFavorites: React.FC = () => {
    const ver = [1, 2];
    return (
        <PopUpFavoritesContainer>
            <img src={MyFavoritesQuotes} alt="my favorite quote image" />
            <FavoriteQuoteContainer>
                {ver.map((item) => (
                    <FavoriteQuote key={item}>
                        <h3>“Eu gosto de comer roquinha e de beber cerveja no bar do Moe.”</h3>
                        <button>
                            <BsHeartFill />
                        </button>
                    </FavoriteQuote>
                ))}
            </FavoriteQuoteContainer>
            <button>
                <BsX />
            </button>
        </PopUpFavoritesContainer>
    );
};
