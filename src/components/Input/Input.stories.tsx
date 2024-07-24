import { useState } from 'react';

/* Components */
import { Input as InputDS } from '.';

/* Types */
import { InputProps } from './Input.types';

export default {
  title: 'Global/Components/Input',
  component: InputDS,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Os campos de texto permitem que os usuários insiram e editem texto.<br/> Este componente recebe propriedades provenientes do <code>styled-system</code>, são elas: <a href="https://styled-system.com/api/#space">SpaceProps</a>.',
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

export const Default = ({ scale }: InputProps) => {
  const [value, setValue] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <InputDS
      scale={scale ?? 'md'}
      value={value}
      placeholder='Lorem Ipsum'
      onChange={handleChange}
    />
  );
};
