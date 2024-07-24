import { useState } from 'react';

/* Components */
import { Switch as SwitchDS } from '.';

export default {
  title: 'Global/Components/Switch',
  component: SwitchDS,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Os interruptores ativam ou desativam o estado de uma única configuração.<br/> Este componente recebe propriedades provenientes do <code>styled-system</code>, são elas: <a href="https://styled-system.com/api/#space">SpaceProps</a>.',
      },
    },
  },
};

export const Default = () => {
  const [checked, setChecked] = useState(false);

  return <SwitchDS value='1' onChange={() => setChecked(!checked)} checked={checked} mb={10} />;
};
