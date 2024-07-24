import { ThemeProvider as StyledThemeProvider } from 'styled-components';

/* Global Styles */
import { GlobalStyles } from '../styles';

/* Specifications */
import { breakpoints, colors, fontSize, space } from '../theme/specs';

interface ChildrenProps {
  children: React.ReactNode;
}

export const theme = {
  breakpoints,
  colors,
  fontSize,
  space,
};

export const ThemeProvider = ({ children }: ChildrenProps) => {
  return (
    <StyledThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </StyledThemeProvider>
  );
};
