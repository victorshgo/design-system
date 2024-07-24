import styled from 'styled-components';
import { space, variant } from 'styled-system';

/* Theme */
import { theme } from '../../theme';

/* Types */
import { InputProps } from './Input.types';

const scale = variant({
  prop: 'scale',
  variants: {
    sm: {
      fontSize: theme.fontSize.small,
      padding: `${theme.space.spacing4} ${theme.space.spacing8}`,
      '&:placeholder-shown ~ label': {
        fontSize: theme.fontSize.small,
      },
    },
    md: {
      fontSize: theme.fontSize.smaller,
      padding: `${theme.space.spacing8} ${theme.space.spacing12}`,
      '&:placeholder-shown ~ label': {
        fontSize: theme.fontSize.smaller,
      },
    },
    lg: {
      fontSize: theme.fontSize.medium,
      padding: `${theme.space.spacing12} ${theme.space.spacing16}`,
      '&:placeholder-shown ~ label': {
        fontSize: theme.fontSize.medium,
      },
    },
  },
});

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const Label = styled.label<{ scale: InputProps['scale'] }>`
  display: block;
  position: absolute;
  top: 0;
  left: ${({ scale }) => {
    if (scale === 'sm') return theme.space.spacing8;
    if (scale === 'md') return theme.space.spacing12;
    if (scale === 'lg') return theme.space.spacing16;
  }};
  color: ${theme.colors.lightGray};
  background: ${theme.colors.white};
  transition: 0.3s;
  transform: ${({ scale }) => {
    if (scale === 'sm') return `translatey(-5px);`;
    if (scale === 'md') return `translatey(-7px);`;
    if (scale === 'lg') return `translatey(-9px);`;
  }};
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  display: block;
  background: transparent;
  border: 1px solid ${theme.colors.lightGray};
  border-radius: ${theme.space.spacing4};
  color: ${theme.colors.gray};
  outline: 0;
  transition: border-color 0.2s;

  &:required,
  &:invalid {
    box-shadow: none;
  }

  &:valid {
    ~ label {
      font-size: ${({ scale }) => {
        if (scale === 'sm') return `10px !important;`;
        if (scale === 'md') return `12px !important;`;
        if (scale === 'lg') return `14px !important;`;
      }};
    }
  }

  &::placeholder {
    color: transparent;
  }

  &:not(:placeholder-shown) ~ label {
    padding: 0px 4px;
  }

  &:placeholder-shown ~ label {
    color: ${theme.colors.gray};
    transform: ${({ scale }) => {
      if (scale === 'sm') return `translatey(5px);`;
      if (scale === 'md') return `translatey(9px);`;
      if (scale === 'lg') return `translatey(13px);`;
    }};
    cursor: text;
  }

  &:focus {
    border-color: ${theme.colors.primary};
    ~ label {
      padding: 0px 6px;
      position: absolute;
      color: ${theme.colors.primary};
      font-size: ${({ scale }) => {
        if (scale === 'sm') return `10px !important;`;
        if (scale === 'md') return `12px !important;`;
        if (scale === 'lg') return `14px !important;`;
      }};
      transform: ${({ scale }) => {
        if (scale === 'sm') return `translatey(-5px);`;
        if (scale === 'md') return `translatey(-7px);`;
        if (scale === 'lg') return `translatey(-9px);`;
      }};
    }
  }

  &:disabled {
    background: ${theme.colors.gray};
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${scale}
  ${space}
`;

Input.defaultProps = {
  scale: 'md',
};
