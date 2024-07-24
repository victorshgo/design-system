import styled from 'styled-components';
import { space } from 'styled-system';

/* Theme */
import { theme } from '../../theme';

/* Types */
import { RadioProps } from './Radio.types';

export const Label = styled.label`
  margin-right: ${theme.space.spacing8};
  color: #303030;
  font-size: ${theme.fontSize.smaller};
  cursor: pointer;
`;

export const Radio = styled.input<RadioProps>`
  margin: 0;
  visibility: hidden;

  &:checked + span {
    border: 2px solid ${theme.colors.primary};
  }

  &:checked + span:after {
    opacity: 1;
  }

  ${space};
`;

export const Custom = styled.span`
  width: 20px;
  height: 20px;
  display: inline-block;
  position: relative;
  left: -8px;
  top: 5px;
  border: 2px solid ${theme.colors.lightGray};
  border-radius: 50%;
  cursor: pointer;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    background: ${theme.colors.primary};
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s;
    transform: translate(-50%, -50%);
  }
`;
