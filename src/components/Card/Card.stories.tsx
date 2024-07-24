/* Components */
import { Card as CardDS } from '.';

import { Typhography as TyphographyDS } from '../Typhography';

/* Types */
import { CardProps } from './Card.types';

export default {
  title: 'Global/Components/Card',
  component: CardDS,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Os cards contêm conteúdo e ações sobre um único assunto.<br/> Este componente recebe propriedades provenientes do <code>styled-system</code>, são elas: <a href="https://styled-system.com/api/#color">ColorProps</a>, <a href="https://styled-system.com/api/#layout">LayoutProps</a> e <a href="https://styled-system.com/api/#space">SpaceProps</a>.',
      },
    },
  },
  argTypes: {
    elevation: {
      defaultValue: 1,
      description: 'Representa a elevação do elemento.',
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
      },
      options: [0, 1, 2, 3, 4, 5],
    },
  },
};

export const Default = ({ elevation }: CardProps) => (
  <CardDS elevation={elevation}>
    <TyphographyDS>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
      was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum.
    </TyphographyDS>
  </CardDS>
);
