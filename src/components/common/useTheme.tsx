import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

export type Theme = 'light' | 'dark'
export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  extend: {
    colors: {

      decorativeLine: {
        light: string;
        dark: string;
      };
    };
    fontWeight: {
      normal: number;
      bold: number;
    };
  };
}

export interface ThemeProviderProps {
  children: React.ReactNode
}

export const useTheme = () => useContext(ThemeContext)
