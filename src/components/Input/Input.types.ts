import { InputHTMLAttributes } from 'react';
import { SpaceProps } from 'styled-system';

export interface ScaleProps {
  scale?: 'sm' | 'md' | 'lg';
}

export interface InputProps extends ScaleProps, SpaceProps, InputHTMLAttributes<HTMLInputElement> {}
