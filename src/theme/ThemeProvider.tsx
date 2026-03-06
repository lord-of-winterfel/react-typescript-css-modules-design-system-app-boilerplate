import type { ReactNode } from 'react'
import type { Theme } from './createTheme'

interface ThemeProviderProps {
  theme: Theme
  children: ReactNode
}

/**
 * Converts theme token values into CSS custom properties on the root element.
 * Components use var(--ui-*) to consume the theme.
 */
export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  const cssVars: Record<string, string> = {}

  Object.entries(theme.colors).forEach(([key, value]) => {
    cssVars[`--ui-color-${key}`] = value
  })
  Object.entries(theme.spacing).forEach(([key, value]) => {
    cssVars[`--ui-spacing-${key}`] = value
  })
  Object.entries(theme.typography.fontSize).forEach(([key, value]) => {
    cssVars[`--ui-font-size-${key}`] = value
  })
  Object.entries(theme.typography.fontWeight).forEach(([key, value]) => {
    cssVars[`--ui-font-weight-${key}`] = value
  })
  Object.entries(theme.typography.lineHeight).forEach(([key, value]) => {
    cssVars[`--ui-line-height-${key}`] = value
  })
  cssVars['--ui-font-family'] = theme.typography.fontFamily
  Object.entries(theme.radius).forEach(([key, value]) => {
    cssVars[`--ui-radius-${key}`] = value
  })

  return (
    <div style={cssVars as React.CSSProperties}>
      {children}
    </div>
  )
}
