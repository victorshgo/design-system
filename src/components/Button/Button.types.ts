import { ReactNode } from 'react';
import { LayoutProps, SpaceProps } from 'styled-system';

export interface ButtonProps extends LayoutProps, SpaceProps {
  bg?: string;
  children: ReactNode;
  color?: string;
  scale?: 'sm' | 'md' | 'lg';
  variant?: 'contained' | 'outlined';
}
