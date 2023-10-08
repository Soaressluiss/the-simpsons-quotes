import { Outlet, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Outlet />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
        ],
    },
]);
