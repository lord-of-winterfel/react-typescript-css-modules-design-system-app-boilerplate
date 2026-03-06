import { createTheme } from './createTheme'
import { colors } from '../tokens/colors'
import { spacing } from '../tokens/spacing'
import { typography } from '../tokens/typography'
import { radius } from '../tokens/radius'

export const darkTheme = createTheme({
  colors: {
    ...colors,
    primary: '#818cf8',
    secondary: '#c084fc',
    background: '#111827',
    backgroundAlt: '#1f2937',
    text: '#f9fafb',
    textMuted: '#9ca3af',
    border: '#374151',
    error: '#f87171',
    success: '#4ade80',
  },
  spacing,
  typography,
  radius,
})
