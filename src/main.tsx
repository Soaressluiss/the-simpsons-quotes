import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";
import { GlobalStyle } from "./styles/Globalstyle.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GlobalStyle/>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
