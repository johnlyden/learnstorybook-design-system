import styled from 'styled-components';

import { color, typography } from '../shared/styles';
import { rgba } from 'polished';
import { easing } from '../shared/animation';

const APPEARANCES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
};

const Text = styled.span`
  display: inline-block;
  vertical-align: top;
`;

const Loading = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  opacity: 0;
`;

const StyledButton = styled.button`
border: 0;
border-radius: 24px;
cursor: pointer;
display: inline-block;
overflow: hidden;
padding: ${props => (props.size === SIZES.SMALL ? '8px 16px' : '10px 21px')};
position: relative;
text-align: center;
text-decoration: none;
transition: all 150ms ease-out;
vertical-align: top;
white-space: nowrap;
user-select: none;
opacity: 1;
margin: 0;
background: transparent;


font-size: ${props =>
  props.size === SIZES.SMALL ? typography.size.s1 : typography.size._s1}px;
font-family: ${typography.type.bold};
line-height: 1.5;

${props =>
  !props.isLoading &&
  `
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;
    }

    &:active {
      transform: translate3d(0, 0, 0);
    }

    &:focus {
      box-shadow: ${rgba(color.primary, 0.4)} 0 1px 9px 2px;
    }

    &:focus:hover {
      box-shadow: ${rgba(color.primary, 0.2)} 0 8px 18px 0px;
    }
  `}

${Text} {
  transform: scale3d(1,1,1) translate3d(0,0,0);
  transition: transform 700ms ${easing.rubber};
  opacity: 1;
}

${Loading} {
  transform: translate3d(0, 100%, 0);
}

svg {
  height: ${props => (props.size === SIZES.SMALL ? '14' : '16')}px;
  width: ${props => (props.size === SIZES.SMALL ? '14' : '16')}px;
  vertical-align: top;
  margin-right: ${props => (props.size === SIZES.SMALL ? '4' : '6')}px;
  margin-top: ${props => (props.size === SIZES.SMALL ? '-1' : '-2')}px;
  margin-bottom: ${props => (props.size === SIZES.SMALL ? '-1' : '-2')}px;

  /* Necessary for js mouse events to not glitch out when hovering on svgs */
  pointer-events: none;
}

${props =>
  props.disabled &&
  `
    cursor: not-allowed !important;
    opacity: 0.5;
    &:hover {
      transform: none;
    }
  `}

${props =>
  props.isUnclickable &&
  `
    cursor: default !important;
    pointer-events: none;
    &:hover {
      transform: none;
    }
  `}

${props =>
  props.isLoading &&
  `
    cursor: progress !important;
    opacity: 0.7;

    ${Loading} {
      transition: transform 700ms ${easing.rubber};
      transform: translate3d(0, -50%, 0);
      opacity: 1;
    }

    ${Text} {
      transform: scale3d(0, 0, 1) translate3d(0, -100%, 0);
      opacity: 0;
    }

    &:hover {
      transform: none;
    }
  `}

${props =>
  props.containsIcon &&
  `
    svg {
      display: block;
      margin: 0;
    }
    padding: ${props.size === SIZES.SMALL ? '7' : '12'}px;
  `}

${props =>
  props.appearance === APPEARANCES.PRIMARY &&
  `
    background: ${color.primary};
    color: ${color.lightest};

    ${!props.isLoading &&
      `
        &:hover {
          background: ${color.secondary};
        }
        &:active {
          box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
        }
        &:focus {
          box-shadow: ${rgba(color.primary, 0.4)} 0 1px 9px 2px;
        }
        &:focus:hover {
          box-shadow: ${rgba(color.primary, 0.2)} 0 8px 18px 0px;
        }
      `}
  `}

${props =>
  props.appearance === APPEARANCES.SECONDARY &&
  `
    box-shadow: ${color.primary} 0 0 0 1.5px inset;
    color: ${color.primary};
    background: transparent;

    ${!props.isLoading &&
      `
        &:hover {
          box-shadow: ${color.secondary} 0 0 0 1.5px inset;
          color: ${color.secondary};
        }

        &:active {
          background: ${color.lightest};
          box-shadow: ${color.secondary} 0 0 0 1.5px inset;
          color: ${color.secondary};
        }
        &:focus {
          box-shadow: ${color.medium} 0 0 0 1.5px inset, ${rgba(
        color.secondary,
        0.4,
      )} 0 1px 9px 2px;
        }
        &:focus:hover {
          box-shadow: ${color.medium} 0 0 0 1.5px inset, ${rgba(
        color.secondary,
        0.2,
      )} 0 8px 18px 0px;
        }
      `};
  `}
`;

export { StyledButton, Text, Loading };
