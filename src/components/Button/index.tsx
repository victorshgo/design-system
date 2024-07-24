/* Styles */
import * as S from './styles';

/* Types */
import { ButtonProps } from './Button.types';

export function Button(props: ButtonProps) {
  const { children, variant } = props;
  return (
    <S.Button variant={variant ?? 'contained'} {...props}>
      {children}
    </S.Button>
  );
}
