import React, { Fragment } from 'react';

import * as S from './styles.js';

const ButtonLink = S.StyledButton.withComponent('a');

const applyStyle = ButtonWrapper => {
  return (
    ButtonWrapper &&
    S.StyledButton.withComponent(
      ({ containsIcon, isLoading, isUnclickable, ...rest }) => (
        <ButtonWrapper {...rest} />
      ),
    )
  );
};

interface Props {
  isLoading?: boolean;
  /** When a button is in the loading state you can supply custom text */
  loadingText?: any; // TODO: a node element
  /** Buttons that have hrefs should use <a> instead of <button> */
  isLink?: boolean;
  children: any;
  appearance?: string;
  isDisabled?: boolean;
  /** Prevents users from clicking on a button multiple times (for things like payment forms) */
  isUnclickable?: boolean;
  /** Buttons with icons by themselves have a circular shape */
  containsIcon?: boolean;
  size: string;
  ButtonWrapper?: any;
}

/**
 * This is the Everlywell Button.
 */

export function Button({
  isDisabled,
  isLoading,
  loadingText,
  isLink,
  children,
  ButtonWrapper,
  ...props
}: Props) {
  const buttonInner = (
    <Fragment>
      <S.Text>{children}</S.Text>
      {isLoading && <S.Loading>{loadingText || 'Loading...'}</S.Loading>}
    </Fragment>
  );

  const StyledButtonWrapper = React.useMemo(() => applyStyle(ButtonWrapper), [
    ButtonWrapper,
  ]);

  let SelectedButton = S.StyledButton;
  if (ButtonWrapper) {
    SelectedButton = StyledButtonWrapper;
  } else if (isLink) {
    SelectedButton = ButtonLink;
  }

  return (
    <SelectedButton isLoading={isLoading} disabled={isDisabled} {...props}>
      {buttonInner}
    </SelectedButton>
  );
}

export default Button;
