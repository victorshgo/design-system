/* Components */
import { Alert as AlertDS } from '.';

/* Types */
import { AlertProps } from './Alert.types';

export default {
  title: 'Global/Components/Alert',
  component: AlertDS,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'As tags são elementos compactos que representam uma entrada, atributo ou ação.<br/> Este componente recebe propriedades provenientes do <code>styled-system</code>, são elas: <a href="https://styled-system.com/api/#color">ColorProps</a> e <a href="https://styled-system.com/api/#space">SpaceProps</a>.',
      },
    },
  },
  argTypes: {
    type: {
      defaultValue: 'error',
      description: 'Indica o tipo do alerta.',
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
      },
      options: ['error', 'warning', 'success', 'info', 'default'],
    },
    message: {
      defaultValue: 'Lorem Ipsum',
      description: 'Representa a mensagem do alerta.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export const Default = ({ type, message, close }: AlertProps) => (
  <AlertDS type={type ?? 'error'} message={message ?? 'Lorem Ipsum'} mb={10} close={close} />
);
