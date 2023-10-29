import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/Globalstyle";
import { CharacterContext } from "./contexts/CharacterContext";
import { useContext } from "react";

export const App: React.FC = () => {
    const { currentTheme } = useContext(CharacterContext);

    return (
        <>
            <ThemeProvider theme={currentTheme}>
                <GlobalStyle />
                <Outlet />
            </ThemeProvider>
        </>
    );
};
