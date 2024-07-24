/* Components */
import { Button as ButtonDS } from '.';

/* Theme */
import { theme } from '../../theme';

/* Types */
import { ButtonProps } from './Button.types';

export default {
  title: 'Global/Components/Button',
  component: ButtonDS,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Os botões permitem que os usuários executem ações e façam escolhas com um único toque.<br/> Este componente recebe propriedades provenientes do <code>styled-system</code>, são elas: <a href="https://styled-system.com/api/#color">ColorProps</a>, <a href="https://styled-system.com/api/#layout">LayoutProps</a> e <a href="https://styled-system.com/api/#space">SpaceProps</a>.',
      },
    },
  },
  argTypes: {
    scale: {
      defaultValue: 'md',
      description: 'Indica o tamanho do elemento.',
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
      },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export const Contained = ({ scale }: ButtonProps) => <ButtonDS scale={scale}>Lorem Ipsum</ButtonDS>;

export const Outlined = ({ scale }: ButtonProps) => (
  <ButtonDS variant='outlined' color={theme.colors.primary} scale={scale}>
    Lorem Ipsum
  </ButtonDS>
);
