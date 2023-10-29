import { useState } from "react";
import light from "../styles/themes/light";

export const UseTheme = () => {
    const [currentTheme, setCurrentTheme] = useState(light);

    return {
        currentTheme,
        setCurrentTheme,
    };
};
