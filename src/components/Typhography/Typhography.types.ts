import { ReactNode } from 'react';
import { SpaceProps, TypographyProps } from 'styled-system';

export interface TyphographyProps extends SpaceProps, TypographyProps {
  children: ReactNode;
  color?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small';
}
