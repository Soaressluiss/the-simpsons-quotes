import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { App } from "./App";
import { CharacterProvider } from "./contexts/CharacterContext";
import { FavoriteProvider } from "./contexts/FavoriteContext";

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
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
        ],
    },
]);
