import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/Globalstyle";
import light from "./styles/themes/light";
import { CharacterProvider } from "./contexts/CharacterContext";
import { FavoriteProvider } from "./contexts/FavoriteContext";

export const App: React.FC = () => {
    return (
        <>
            <ThemeProvider theme={light}>
                <CharacterProvider>
                    <FavoriteProvider>
                        <GlobalStyle />
                        <Outlet />
                    </FavoriteProvider>
                </CharacterProvider>
            </ThemeProvider>
        </>
    );
};
