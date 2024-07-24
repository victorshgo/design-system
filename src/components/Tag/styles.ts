import styled from 'styled-components';
import { space } from 'styled-system';

/* Theme */
import { theme } from '../../theme';

/* Types */
import { TagProps } from './Tag.types';

/* Utils */
import { getColors } from '../../utils/getColors';

export const Tag = styled.div<TagProps>`
  width: fit-content;
  padding: ${theme.space.spacing4} ${theme.space.spacing20};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fontSize.smaller};
  color: ${theme.colors.white};
  border-radius: ${theme.space.spacing30};
  background-color: ${({ type }) => getColors(type)};
  ${space};
`;
