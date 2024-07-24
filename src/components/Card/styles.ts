import styled from 'styled-components';
import { fontSize, layout, space } from 'styled-system';

/* Theme */
import { theme } from '../../theme';

/* Types */
import { CardProps } from './Card.types';

function getElevation(elevation: number) {
  switch (elevation) {
    case 0:
      return;
    case 1:
      return `box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);`;
    case 2:
      return `box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);`;
    case 3:
      return `box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);`;
    case 4:
      return `box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);`;
    case 5:
      return `box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);`;
  }
}

export const Card = styled.div<CardProps>`
  padding: 1rem;

  display: inline-block;
  position: relative;

  background: ${theme.colors.white};
  border-radius: ${theme.space.spacing8};

  color: ${({ color }) => (color ? color : theme.colors.gray)};

  ${({ elevation }) => getElevation(elevation ?? 1)}
  ${fontSize};
  ${layout};
  ${space};
`;

Card.defaultProps = {
  elevation: 1,
};
