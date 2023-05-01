import React from 'react'

import { createContext, useContext, useState } from 'react'

type Theme = 'light' | 'dark'
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  ThemeProvider?: React.FC;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType );
export const useTheme = () => useContext(ThemeContext);


// ThemePriovider is a custom component that wraps the entire app.
// It provides the theme context to all of its children.
// It also provides a function to toggle the theme.

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


export default ThemeProvider