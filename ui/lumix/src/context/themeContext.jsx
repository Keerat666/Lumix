import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const UseThemeContext = ({ children }) => {
    const getTheme = localStorage.getItem("darkmode");
    const [theme, setTheme] = useState(!!getTheme);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    };
    return context;
};