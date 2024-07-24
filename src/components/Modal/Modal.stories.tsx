import { useState } from 'react';

/* Components */
import { Modal as ModalDS } from '.';

import { Button as ButtonDS } from '../Button/styles';
import { Typhography as TyphographyDS } from '../Typhography/styles';

/* Types */
import { ModalProps } from './Modal.types';

export default {
  title: 'Global/Components/Modal',
  component: ModalDS,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Um modal fornece uma base sólida para criar caixas de diálogo, popovers, lightboxes ou qualquer outra coisa.',
      },
    },
  },
  argTypes: {
    title: {
      defaultValue: 'Lorem Ipsum',
      description: 'Representa o título do modal.',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      description: 'Representa a largura do modal.',
    },
    open: {
      description: 'Ação de abrir o modal.',
    },
    onClose: {
      description: 'Ação de fechar o modal.',
    },
  },
};

export const Default = ({ title }: ModalProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ButtonDS onClick={() => setVisible(true)}>Open modal</ButtonDS>
      </div>
      <ModalDS open={visible} title={title || 'Lorem Ipsum'} onClose={() => setVisible(false)}>
        <TyphographyDS>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </TyphographyDS>
      </ModalDS>
    </>
  );
};
