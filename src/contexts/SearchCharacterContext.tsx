import { AxiosError } from "axios";
import React, { createContext, useState } from "react";
import { instance } from "../services/api";
import { IData } from "../types/data";

interface ISearchProviderProps {
    children: React.ReactNode;
}
interface ISearchProps {
    searchCharacter: string;
    setSearchCharacter: React.Dispatch<React.SetStateAction<string>>;
    dataSearch: IData[];
    setDataSearch: React.Dispatch<React.SetStateAction<IData[]>>;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    HandleSearch: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export const SearchCharacterContext = createContext<ISearchProps>({} as ISearchProps);
SearchCharacterContext.displayName = "search Context";

export const SearchCharacterProvider: React.FC<ISearchProviderProps> = ({ children }) => {
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
        <SearchCharacterContext.Provider
            value={{
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
        </SearchCharacterContext.Provider>
    );
};
