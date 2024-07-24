/* Components */
import { Tag as TagDS } from './styles';

export default {
  title: 'Global/Components/Tag',
  component: TagDS,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'As tags são elementos compactos que representam uma entrada, atributo ou ação.<br/> Este componente recebe propriedades provenientes do <code>styled-system</code>, são elas: <a href="https://styled-system.com/api/#color">ColorProps</a> e <a href="https://styled-system.com/api/#space">SpaceProps</a>.',
      },
    },
  },
};

export const Default = () => (
  <div>
    <TagDS type='error' mb={10}>
      Lorem Ipsum
    </TagDS>
    <TagDS type='warning' mb={10}>
      Lorem Ipsum
    </TagDS>
    <TagDS type='success' mb={10}>
      Lorem Ipsum
    </TagDS>
    <TagDS type='info' mb={10}>
      Lorem Ipsum
    </TagDS>
    <TagDS type='default'>Lorem Ipsum</TagDS>
  </div>
);
