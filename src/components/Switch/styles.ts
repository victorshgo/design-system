import styled from 'styled-components';
import { space } from 'styled-system';

/* Theme */
import { theme } from '../../theme';

/* Types */
import { SwitchProps } from './Switch.types';

export const Label = styled.label`
  margin-right: ${theme.space.spacing8};
  display: flex;
  align-items: center;
  position: relative;
  color: #303030;
  font-size: ${theme.fontSize.smaller};
  cursor: pointer;
`;

export const Input = styled.input<SwitchProps>`
  display: none;

  :checked + span::before {
    transform: translateX(25px);
    background-color: ${theme.colors.primary};
  }

  :checked + span {
    background-color: rgba(0, 82, 125, 0.3);
  }

  ${space}
`;

export const Switch = styled.span`
  width: 40px;
  height: 15px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 25px;
  transition: background-color 0.2s ease;
  cursor: pointer;

  &::before {
    content: '';
    width: 21px;
    height: 21px;
    position: absolute;
    left: -4px;
    top: -3px;
    background-color: #aaa;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
`;
