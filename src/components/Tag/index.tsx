/* Styles */
import * as S from './styles';

/* Types */
import { TagProps } from './Tag.types';

export function Tag(props: TagProps) {
  const { children } = props;
  return <S.Tag {...props}>{children}</S.Tag>;
}
