import { useState } from 'react';

/* Components */
import { CheckBox as CheckBoxDS } from '.';

export default {
  title: 'Global/Components/CheckBox',
  component: CheckBoxDS,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'As caixas de seleção permitem que o usuário selecione um ou mais itens de um conjunto.<br/> Este componente não recebe propriedades provenientes do <code>styled-system</code>.',
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
      <CheckBoxDS value='1' label='Lorem Ipsum' onChange={onChange} checked={checked === '1'} />
      <CheckBoxDS value='2' label='Lorem Ipsum' onChange={onChange} checked={checked === '2'} />
      <CheckBoxDS value='3' label='Lorem Ipsum' onChange={onChange} checked={checked === '3'} />
      <CheckBoxDS value='4' label='Lorem Ipsum' onChange={onChange} checked={checked === '4'} />
      <CheckBoxDS value='5' label='Lorem Ipsum' onChange={onChange} checked={checked === '5'} />
    </div>
  );
};
