import { InputHTMLAttributes } from 'react';
import { SpaceProps } from 'styled-system';

export interface RadioProps extends SpaceProps, InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
