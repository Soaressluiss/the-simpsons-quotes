import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { App } from "./App";
import { CharacterProvider } from "./contexts/CharacterContext";
import { FavoriteProvider } from "./contexts/FavoriteContext";
import { ErrorPage } from "./pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <CharacterProvider>
                <FavoriteProvider>
                    <App />
                </FavoriteProvider>
            </CharacterProvider>
        ),
        errorElement:  <ErrorPage /> ,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
        ],
    },
]);
