import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/Globalstyle";
import light from "./styles/themes/light";

export const App: React.FC = () => {
    return (
        <>
            <ThemeProvider theme={light}>
                <GlobalStyle />
                <Outlet />
            </ThemeProvider>
        </>
    );
};
