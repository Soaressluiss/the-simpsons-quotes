import {
    ButtonCLose,
    ButtonDeleteAll,
    FavoriteQuote,
    FavoriteQuoteContainer,
    ModalBackground,
    ModalFavoritesContainer,
} from "./styles";
import MyFavoritesQuotes from "../../../../assets/My Favorite Quotes.png";
import { BsTrash, BsX } from "react-icons/bs";
import { ElementRef, useContext, useEffect, useRef } from "react";
import { FavoriteContext } from "../../../../contexts/FavoriteContext";
import { UseLocalStorage } from "../../../../hooks/useLocalStorage";
import { IFavorite } from "../../../../types/interfaces";

type ModalFavoritesTypes = {
    closeFavorites: boolean;
    setCloseFavorites: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ModalFavorites: React.FC<ModalFavoritesTypes> = ({ closeFavorites, setCloseFavorites }) => {
    const { favoriteData, setFavoriteData } = useContext(FavoriteContext);
    const { setLocalStorage, getLocalStorage, deleteLocalStorage } = UseLocalStorage();
    const modalRef = useRef<ElementRef<"div">>(null);
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setCloseFavorites(false);
                document.body.style.overflow = "auto";
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [setCloseFavorites]);

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
    function handleCloseModal() {
        document.body.style.overflow = "auto";
        setCloseFavorites(false);
    }
    return (
        <ModalBackground $CloseFavorites={closeFavorites}>
            <ModalFavoritesContainer ref={modalRef}>
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
                <ButtonCLose onClick={() => handleCloseModal()} title="close favorite modal">
                    <BsX />
                </ButtonCLose>
                <ButtonDeleteAll onClick={() => handleDeleteAllQuotes()} title="delete all quotes">
                    <BsTrash />
                </ButtonDeleteAll>
            </ModalFavoritesContainer>
        </ModalBackground>
    );
};
