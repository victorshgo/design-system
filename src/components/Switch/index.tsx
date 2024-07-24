/* Styles */
import * as S from './styles';

/* Types */
import { SwitchProps } from './Switch.types';

export function Switch(props: SwitchProps) {
  return (
    <S.Label>
      <S.Input type='checkbox' {...props} />
      <S.Switch />
    </S.Label>
  );
}
