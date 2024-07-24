/* Theme */
import { theme } from '../theme';

export type ColorsProps = 'success' | 'error' | 'info' | 'warning' | 'default';

export function getColors(color?: ColorsProps) {
  switch (color) {
    case 'success':
      return theme.colors.green;
    case 'error':
      return theme.colors.coralRed;
    case 'info':
      return theme.colors.secondary;
    case 'warning':
      return theme.colors.goldenYellow;
    default:
      return theme.colors.gray;
  }
}
