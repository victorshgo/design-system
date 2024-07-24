/* Styles */
import * as S from './styles';

/* Types */
import { RadioProps } from './Radio.types';

export function Radio(props: RadioProps) {
  const { label } = props;
  return (
    <S.Label>
      <S.Radio type='radio' {...props} />
      <S.Custom />
      {label}
    </S.Label>
  );
}
