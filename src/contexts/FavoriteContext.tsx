import React, { createContext, useState } from "react";
import { IFavorite } from "../types/interfaces";
import { UseLocalStorage } from "../hooks/useLocalStorage";

interface IFavoriteProviderProps {
    children: React.ReactNode;
}

interface IFavoriteContextProps {
    favoriteData: IFavorite[];
    setFavoriteData: React.Dispatch<React.SetStateAction<IFavorite[]>>;
}

export const FavoriteContext = createContext<IFavoriteContextProps>({} as IFavoriteContextProps);
FavoriteContext.displayName = "Favorite Context";

export const FavoriteProvider: React.FC<IFavoriteProviderProps> = ({ children }) => {
    const { getLocalStorage } = UseLocalStorage();

    const getFavoritesQuotes = getLocalStorage("favorites");
    const favoritesQuotes = (getFavoritesQuotes && JSON.parse(getFavoritesQuotes)) || [];

    const [favoriteData, setFavoriteData] = useState<IFavorite[]>(favoritesQuotes);

    return <FavoriteContext.Provider value={{ favoriteData, setFavoriteData }}>{children}</FavoriteContext.Provider>;
};
