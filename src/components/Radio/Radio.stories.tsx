import { useState } from 'react';

/* Components */
import { Radio as RadioDS } from '.';

export default {
  title: 'Global/Components/Radio',
  component: RadioDS,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'O campo de interação do tipo rádio permite que o usuário selecione uma opção de um conjunto.<br/> Este componente recebe propriedades provenientes do <code>styled-system</code>, são elas: <a href="https://styled-system.com/api/#space">SpaceProps</a>.',
      },
    },
  },
};

export const Default = () => {
  const [checked, setChecked] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setChecked(value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <RadioDS
        value='1'
        label='Lorem Ipsum'
        onChange={onChange}
        checked={checked === '1'}
        mb={10}
      />
      <RadioDS
        value='2'
        label='Lorem Ipsum'
        onChange={onChange}
        checked={checked === '2'}
        mb={10}
      />
      <RadioDS
        value='3'
        label='Lorem Ipsum'
        onChange={onChange}
        checked={checked === '3'}
        mb={10}
      />
      <RadioDS
        value='4'
        label='Lorem Ipsum'
        onChange={onChange}
        checked={checked === '4'}
        mb={10}
      />
      <RadioDS value='5' label='Lorem Ipsum' onChange={onChange} checked={checked === '5'} />
    </div>
  );
};
