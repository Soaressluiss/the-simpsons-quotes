import { AxiosError } from "axios";
import React, { createContext, useState } from "react";
import { instance } from "../services/api";
import { IData } from "../types/data";

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
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    HandleSearch: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export const CharacterContext = createContext<ICharacterProps>({} as ICharacterProps);
CharacterContext.displayName = "Character Context";

export const CharacterProvider: React.FC<ICharacterProviderProps> = ({ children }) => {
    const [data, setData] = useState<IData[]>([]);
    const [searchCharacter, setSearchCharacter] = useState<string>("");
    const [dataSearch, setDataSearch] = useState<IData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const HandleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await instance.get(`?count=10&character=${searchCharacter}`);

            setDataSearch(response.data);
        } catch (err) {
            const error = err as AxiosError;
            console.error(error);
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
                dataSearch,
                setDataSearch,
                isLoading,
                setIsLoading,
                HandleSearch,
            }}
        >
            {children}
        </CharacterContext.Provider>
    );
};
