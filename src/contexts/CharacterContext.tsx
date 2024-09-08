import { AxiosError } from "axios";
import React, { createContext, useState } from "react";
import { api } from "../services/api";
import { ICharacterCliccked, IData } from "../types/interfaces";
import light from "../styles/themes/light";
import { UseLocalStorage } from "../hooks/useLocalStorage";

interface ICharacterProviderProps {
    children: React.ReactNode;
}
interface ICharacterProps {
    data: IData[];
    setData: React.Dispatch<React.SetStateAction<IData[]>>;
    searchCharacter: string;
    setSearchCharacter: React.Dispatch<React.SetStateAction<string>>;
    dataSearch: IData[];
    setDataSearch: React.Dispatch<React.SetStateAction<IData[]>>;
    characterClicked: ICharacterCliccked;
    setCharacterClicked: React.Dispatch<React.SetStateAction<ICharacterCliccked>>;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    HandleSearch: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
    currentTheme: {
        name: string;

        colors: {
            primary: string;
            secondary: string;
            greenMint: string;
            teaRose: string;
            grayPlatinum: string;
        };
        fonts: {
            FColorPrimary: string;
            fontPrimary: string;
            fontSecondary: string;
        };
    };
    setCurrentTheme: React.Dispatch<
        React.SetStateAction<{
            name: string;

            colors: {
                primary: string;
                secondary: string;
                greenMint: string;
                teaRose: string;
                grayPlatinum: string;
            };
            fonts: {
                FColorPrimary: string;
                fontPrimary: string;
                fontSecondary: string;
            };
        }>
    >;
}

export const CharacterContext = createContext<ICharacterProps>({} as ICharacterProps);
CharacterContext.displayName = "Character Context";

export const CharacterProvider: React.FC<ICharacterProviderProps> = ({ children }) => {
    const [data, setData] = useState<IData[]>([]);
    const [searchCharacter, setSearchCharacter] = useState<string>("");
    const [dataSearch, setDataSearch] = useState<IData[]>([]);
    const [characterClicked, setCharacterClicked] = useState<ICharacterCliccked>({
        id: 0,
        character: "",
        image: "",
        quote: "",
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { getLocalStorage } = UseLocalStorage();

    const getTheme = getLocalStorage("theme");
    const getCurrentTheme = (getTheme && JSON.parse(getTheme)) || light;

    const [currentTheme, setCurrentTheme] = useState(getCurrentTheme);

    const HandleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await api.get(`?count=10&character=${searchCharacter}`);

            setDataSearch(response.data);
            setSearchCharacter("");
        } catch (err) {
            const error = err as AxiosError;
            console.error(error);
            setSearchCharacter("");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <CharacterContext.Provider
            value={{
                data,
                setData,
                searchCharacter,
                setSearchCharacter,
                characterClicked,
                setCharacterClicked,
                dataSearch,
                setDataSearch,
                isLoading,
                setIsLoading,
                HandleSearch,
                currentTheme,
                setCurrentTheme,
            }}
        >
            {children}
        </CharacterContext.Provider>
    );
};
