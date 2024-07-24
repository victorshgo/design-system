import ReactDOM from 'react-dom';

/* Components */
import { Typhography } from '../Typhography';

/* Styles */
import * as S from './styles';

/* Types */
import { ModalProps } from './Modal.types';

export function Modal(props: ModalProps) {
  const { open, children, title, width, onClose } = props;

  const portalEl = document.getElementById('modal-root');

  if (open && portalEl) {
    return (
      <div>
        {ReactDOM.createPortal(
          <>
            <S.Backdrop onClick={onClose} />
            <S.Modal width={width}>
              <S.ModalHeader>
                <Typhography variant='h3' fontWeight={500}>
                  {title}
                </Typhography>
                <S.CloseIcon onClick={onClose} />
              </S.ModalHeader>
              {children}
            </S.Modal>
          </>,
          portalEl,
        )}
      </div>
    );
  }

  return null;
}
