import * as React from 'react';
// import styled, { css } from 'styled-components';
// import { background, color, typography } from '../shared/styles';

import * as S from './styles';

// const BadgeWrapper = styled.div`
//   display: inline-block;
//   vertical-align: top;
//   font-size: 11px;
//   line-height: 12px;
//   padding: 4px 12px;
//   border-radius: 3em;
//   font-weight: ${typography.weight.bold};

//   svg {
//     height: 12px;
//     width: 12px;
//     margin-right: 4px;
//     margin-top: -2px;
//   }

//   ${(props: any) =>
//     props.status === 'positive' &&
//     css`
//       color: ${color.positive};
//       background: ${background.positive};
//     `};

//   ${(props: any) =>
//     props.status === 'negative' &&
//     css`
//       color: ${color.negative};
//       background: ${background.negative};
//     `};

//   ${(props: any) =>
//     props.status === 'warning' &&
//     css`
//       color: ${color.warning};
//       background: ${background.warning};
//     `};

//   ${(props: any) =>
//     props.status === 'error' &&
//     css`
//       color: ${color.lightest};
//       background: ${color.negative};
//     `};

//   ${(props: any) =>
//     props.status === 'neutral' &&
//     css`
//       color: ${color.dark};
//       background: ${color.mediumlight};
//     `};
// `;

/**
 * **Badges?!** We don't need no stinkin' badges!!
 */
export function Badge({ ...props }) {
  return <S.BadgeWrapper {...props} />;
}

export default Badge;
