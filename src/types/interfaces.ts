export interface IData {
    quote: string;
    character: string;
    image: string;
}

export interface ICharacterCliccked {
    id: number;
    image: string;
    character: string;
    quote:string;
}

export interface IFavorite {
    id: number;
    quote: string;
}