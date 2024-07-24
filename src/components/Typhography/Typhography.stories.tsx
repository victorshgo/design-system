/* Components */
import { Typhography as TyphographyDS } from './styles';

/* Types */
import { TyphographyProps } from './Typhography.types';

export default {
  title: 'Global/Components/Typhography',
  component: TyphographyDS,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Use a tipografia para apresentar seu design e conteúdo da maneira mais clara e eficiente possível.<br/> Este componente recebe propriedades provenientes do <code>styled-system</code>, são elas: <a href="https://styled-system.com/api/#color">ColorProps</a>, <a href="https://styled-system.com/api/#space">SpaceProps</a> e <a href="https://styled-system.com/api/#typography">TypographyProps</a>.',
      },
    },
  },
  argTypes: {
    variant: {
      defaultValue: 'body',
      description: 'Indica o tamanho do texto.',
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
      },
      options: ['h1', 'h2', 'h3', 'h4', 'body', 'small'],
    },
  },
};

export const Default = ({ variant }: TyphographyProps) => (
  <TyphographyDS variant={variant}>Lorem Ipsum</TyphographyDS>
);
