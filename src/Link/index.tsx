import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';

import * as S from './styles';

const applyStyle = LinkWrapper => {
  return (
    LinkWrapper &&
    styled(
      ({
        containsIcon,
        inverse,
        nochrome,
        secondary,
        tertiary,
        ...linkWrapperRest
      }) => <LinkWrapper {...linkWrapperRest} />,
    )`
      ${S.linkStyles};
    `
  );
};

interface Props {
  // TODO: change these anys
  isButton?: boolean;
  children?: any;
  withArrow?: boolean;
  containsIcon?: boolean;
  LinkWrapper: any;
  inverse?: boolean;
  nochrome?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
}

/**
 * Links can contains text and/or icons. Be careful using only icons, you must provide a text alternative via aria-label for accessibility.
 */
export function Link({
  isButton,
  withArrow,
  LinkWrapper,
  children,
  ...rest
}: Props) {
  const content = (
    <Fragment>
      <S.LinkInner withArrow={withArrow}>
        {children}
        {withArrow && <Icon icon='arrowright' block />}
      </S.LinkInner>
    </Fragment>
  );

  const StyledLinkWrapper = applyStyle(LinkWrapper);

  let SelectedLink = S.LinkA;
  if (LinkWrapper) {
    SelectedLink = StyledLinkWrapper;
  } else if (isButton) {
    SelectedLink = S.LinkButton;
  }

  return <SelectedLink {...rest}>{content}</SelectedLink>;
}
