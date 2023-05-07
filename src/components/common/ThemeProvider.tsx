
import React, { createContext, useState } from 'react'

import { Theme, ThemeContextType, ThemeProviderProps } from './useTheme'

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light') // Make sure to use the Theme type here

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider