import { createContext, useContext, useCallback, useState, type ReactNode } from 'react'
import type { Theme } from '../theme/createTheme'
import { lightTheme } from '../theme/lightTheme'
import { darkTheme } from '../theme/darkTheme'
import { ThemeProvider } from '../theme/ThemeProvider'

type ThemeMode = 'light' | 'dark'

interface ThemeContextValue {
  mode: ThemeMode
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('light')
  const theme = mode === 'light' ? lightTheme : darkTheme
  const toggleTheme = useCallback(() => {
    setMode((m) => (m === 'light' ? 'dark' : 'light'))
  }, [])

  return (
    <ThemeContext.Provider value={{ mode, theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeModeProvider')
  return ctx
}
