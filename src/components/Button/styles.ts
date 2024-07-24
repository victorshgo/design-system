import styled from 'styled-components';
import { fontSize, layout, space, variant } from 'styled-system';

/* Theme */
import { theme } from '../../theme';

/* Types */
import { ButtonProps } from './Button.types';

const variants = variant({
  prop: 'variant',
  variants: {
    contained: {},
    outlined: {
      bg: 'transparent',
      border: '1px solid',
    },
  },
});

const scale = variant({
  prop: 'scale',
  variants: {
    sm: {
      fontSize: theme.fontSize.small,
      padding: `${theme.space.spacing4} ${theme.space.spacing8}`,
    },
    md: {
      fontSize: theme.fontSize.smaller,
      padding: `${theme.space.spacing8} ${theme.space.spacing12}`,
    },
    lg: {
      fontSize: theme.fontSize.medium,
      padding: `${theme.space.spacing12} ${theme.space.spacing16}`,
    },
  },
});

export const Button = styled.button<ButtonProps>`
  outline: 0;
  border: 0;
  border-radius: ${theme.space.spacing4};

  background-color: ${({ bg }) => (bg ? bg : theme.colors.primary)};

  color: ${({ color }) => (color ? color : theme.colors.white)};
  cursor: pointer;

  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    background: ${theme.colors.gray};
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${fontSize};
  ${layout};
  ${scale};
  ${space};
  ${variants};
`;

Button.defaultProps = {
  scale: 'md',
};
