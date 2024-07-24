/* Styles */
import * as S from './styles';

/* Types */
import { TyphographyProps } from './Typhography.types';

export function Typhography(props: TyphographyProps) {
  const { children, variant } = props;
  return (
    <S.Typhography variant={variant ?? 'body'} {...props}>
      {children}
    </S.Typhography>
  );
}
