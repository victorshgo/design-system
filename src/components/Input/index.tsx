/* Styles */
import * as S from './styles';

/* Types */
import { InputProps } from './Input.types';

export function Input(props: InputProps) {
  const { scale, placeholder } = props;
  return (
    <S.Container>
      <S.Input type='text' {...props} />
      <S.Label scale={scale}>{placeholder}</S.Label>
    </S.Container>
  );
}
