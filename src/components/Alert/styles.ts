import styled from 'styled-components';
import { space } from 'styled-system';

/* Theme */
import { theme } from '../../theme';

/* Types */
import { AlertProps } from './Alert.types';

/* Utils */
import { getColors } from '../../utils/getColors';

export const Alert = styled.div<AlertProps>`
  width: 100%;
  padding: ${theme.space.spacing16} ${theme.space.spacing20};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ type }) => getColors(type)};
  border-radius: ${theme.space.spacing4};

  color: ${theme.colors.white};

  font-size: ${theme.fontSize.medium};

  > div {
    display: flex;
    align-items: center;
  }

  ${space}
`;

export const Message = styled.span`
  margin-left: ${theme.space.spacing8};
`;

export const Action = styled.span`
  margin-right: ${theme.space.spacing8};
  font-weight: 600;
  letter-spacing: 0.5px;
`;
