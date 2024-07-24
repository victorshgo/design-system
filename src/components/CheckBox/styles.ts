import styled from 'styled-components';
import { space } from 'styled-system';

/* Theme */
import { theme } from '../../theme';

/* Types */
import { CheckBoxProps } from './CheckBox.types';

export const Label = styled.label`
  margin-bottom: 5px;
  margin-right: ${theme.space.spacing8};
  display: flex;
  align-items: center;
  position: relative;
  color: #303030;
  font-size: ${theme.fontSize.smaller};
  cursor: pointer;
  ${space};
`;

export const CheckBox = styled.input<CheckBoxProps>`
  width: 20px;
  height: 20px;
  margin-right: ${theme.space.spacing8};
  border: 2px solid ${theme.colors.lightGray};
  border-radius: ${theme.space.spacing4};
  appearance: none;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;

  &:checked {
    border: 2px solid ${theme.colors.primary};
    background-color: ${theme.colors.primary};
    position: relative;
  }

  &:not(:checked) ~ svg {
    display: none;
  }

  &:checked ~ svg {
    display: block;
    position: absolute;
    left: 2.5px;
    top: 2.5px;
    color: #fff;
  }
`;
