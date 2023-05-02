import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

export type Theme = 'light' | 'dark'
export interface ThemeContextType {
  theme: Theme 
  toggleTheme: () => void
}

export interface ThemeProviderProps {
  children: React.ReactNode
}

export const useTheme = () => useContext(ThemeContext)
