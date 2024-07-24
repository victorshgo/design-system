import { FaInfoCircle, FaTimes } from 'react-icons/fa';

/* Styles */
import * as S from './styles';

/* Types */
import { AlertProps } from './Alert.types';

export function Alert(props: AlertProps) {
  const { message, action, close } = props;
  return (
    <S.Alert {...props}>
      <div>
        <FaInfoCircle size={18} />
        <S.Message>{message}</S.Message>
      </div>
      <div>
        {action && <S.Action onClick={action.click}>{action?.name}</S.Action>}
        {close && <FaTimes size={18} style={{ cursor: 'pointer' }} />}
      </div>
    </S.Alert>
  );
}
