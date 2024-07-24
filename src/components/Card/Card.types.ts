import { ReactNode } from 'react';
import { ColorProps, LayoutProps, SpaceProps } from 'styled-system';

export interface CardProps extends ColorProps, LayoutProps, SpaceProps {
  children: ReactNode;
  color?: string;
  elevation?: number;
}
