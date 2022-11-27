import { createContext, useContext, useState } from "react";

// @ts-ignore
const Context = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("");
    return (
        <Context.Provider value={[theme, setTheme]}>{children}</Context.Provider>
    );
}

export function useThemeContext() {
    return useContext(Context);
}

export default useThemeContext
