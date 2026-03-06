import { createTheme } from './createTheme'
import { colors } from '../tokens/colors'
import { spacing } from '../tokens/spacing'
import { typography } from '../tokens/typography'
import { radius } from '../tokens/radius'

export const lightTheme = createTheme({
  colors: {
    ...colors,
    primary: '#4f46e5',
    secondary: '#9333ea',
    background: '#ffffff',
    backgroundAlt: '#f9fafb',
    text: '#111827',
    textMuted: '#6b7280',
    border: '#e5e7eb',
    error: '#dc2626',
    success: '#16a34a',
  },
  spacing,
  typography,
  radius,
})
