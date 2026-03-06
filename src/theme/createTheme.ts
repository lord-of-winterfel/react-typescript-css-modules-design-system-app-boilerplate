import type { colors } from '../tokens/colors'
import type { spacing } from '../tokens/spacing'
import type { typography } from '../tokens/typography'
import type { radius } from '../tokens/radius'

export interface Theme {
  colors: Record<keyof typeof colors, string>
  spacing: typeof spacing
  typography: typeof typography
  radius: typeof radius
}

export function createTheme(theme: Theme): Theme {
  return theme
}
