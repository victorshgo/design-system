import styled from 'styled-components';
import { fontWeight, space, variant } from 'styled-system';

/* Theme */
import { theme } from '../../theme';

/* Types */
import { TyphographyProps } from './Typhography.types';

const variants = variant({
  prop: 'variant',
  variants: {
    h1: {
      fontSize: theme.fontSize.extraLarge,
    },
    h2: {
      fontSize: theme.fontSize.larger,
    },
    h3: {
      fontSize: theme.fontSize.large,
    },
    h4: {
      fontSize: theme.fontSize.medium,
    },
    body: {
      fontSize: theme.fontSize.smaller,
    },
    small: {
      fontSize: theme.fontSize.small,
    },
  },
});

export const Typhography = styled.p<TyphographyProps>`
  margin: 0;

  color: ${({ color }) => (color ? color : theme.colors.gray)} ${fontWeight};
  ${space};
  ${variants};
`;
