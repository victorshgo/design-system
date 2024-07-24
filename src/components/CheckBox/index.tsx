/* Styles */
import { FaCheck } from 'react-icons/fa';
import * as S from './styles';

/* Types */
import { CheckBoxProps } from './CheckBox.types';

export function CheckBox(props: CheckBoxProps) {
  const { label } = props;
  return (
    <S.Label>
      <S.CheckBox type='checkbox' {...props} />
      <FaCheck />
      {label}
    </S.Label>
  );
}
