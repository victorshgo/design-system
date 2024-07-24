import { ButtonHTMLAttributes, ReactNode } from 'react';
import { LayoutProps, SpaceProps } from 'styled-system';

export interface ButtonProps
  extends LayoutProps,
    SpaceProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  bg?: string;
  children: ReactNode;
  color?: string;
  scale?: 'sm' | 'md' | 'lg';
  variant?: 'contained' | 'outlined';
}
