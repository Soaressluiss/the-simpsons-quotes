import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/Globalstyle";
import light from "./styles/themes/light";
import { SearchCharacterProvider } from "./contexts/SearchCharacterContext";

export const App: React.FC = () => {
    return (
        <>
            <ThemeProvider theme={light}>
                <SearchCharacterProvider>
                    <GlobalStyle />
                    <Outlet />
                </SearchCharacterProvider>
            </ThemeProvider>
        </>
    );
};
