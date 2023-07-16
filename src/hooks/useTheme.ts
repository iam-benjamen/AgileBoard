import { useContext } from "react";
import { ThemeContext, ThemeContextData } from "../context/ThemeContext";

const useTheme = (): ThemeContextData => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default useTheme;
