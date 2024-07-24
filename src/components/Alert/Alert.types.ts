import { SpaceProps } from 'styled-system';

/* Utils */
import { ColorsProps } from '../../utils/getColors';

export interface AlertProps extends SpaceProps {
  type?: ColorsProps;
  message: string;
  close?: boolean;
  action?: {
    name: string;
    click: () => void;
  };
}
