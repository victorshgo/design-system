import { ReactNode } from 'react';
import { SpaceProps } from 'styled-system';

/* Utils */
import { ColorsProps } from '../../utils/getColors';

export interface TagProps extends SpaceProps {
  children: ReactNode;
  type?: ColorsProps;
}
