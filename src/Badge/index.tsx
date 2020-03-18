import * as React from 'react';

import * as S from './styles';

interface Props {
  status?: string;
}
/**
 * **Badges?!** We don't need no stinkin' badges!!
 */

export function Badge({ ...props }: Props) {
  return <S.BadgeWrapper {...props} />;
}

export default Badge;
