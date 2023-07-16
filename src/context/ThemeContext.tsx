import { createContext, useEffect, useState } from "react";

export interface ThemeContextData {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextData | undefined>(
  undefined
);

const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const root = document.documentElement;

    if (!isDarkMode) {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  }, [isDarkMode]);

  const ThemeContextValue: ThemeContextData = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={ThemeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
