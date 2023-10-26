import React, { createContext, useState } from "react";
import { IFavorite } from "../types/interfaces";

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
    const [favoriteData, setFavoriteData] = useState<IFavorite[]>([]);

    return <FavoriteContext.Provider value={{ favoriteData, setFavoriteData }}>{children}</FavoriteContext.Provider>;
};
