/* Styles */
import * as S from './styles';

/* Types */
import { CardProps } from './Card.types';

export function Card(props: CardProps) {
  const { children } = props;

  return <S.Card {...props}>{children}</S.Card>;
}
