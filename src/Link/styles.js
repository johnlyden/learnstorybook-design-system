import styled, { css } from 'styled-components';
import { color } from '../shared/styles';

const linkStyles = css`
  display: inline-block;
  transition: transform 150ms ease-out, color 150ms ease-out;
  text-decoration: none;
  color: ${color.cobalt};
  &:hover,
  &:focus {
    cursor: pointer;
    transform: translateY(-1px);
    color: ${color.activeBlue};
    text-decoration: underline;
  }
  &:focus {
    color: ${color.focusBlue};
  }
  &:active {
    transform: translateY(0);
    color: ${color.activeBlue};
  }
  &:disabled {
    color: ${color.manatee};
  }
  svg {
    display: inline-block;
    height: 1em;
    width: 1em;
    vertical-align: text-top;
    position: relative;
    bottom: -0.125em;
    margin-right: 0.4em;
  }
  ${props =>
    props.containsIcon &&
    css`
      svg {
        height: 1em;
        width: 1em;
        vertical-align: middle;
        position: relative;
        bottom: 0;
        margin-right: 0;
      }
    `};
  ${props =>
    props.secondary &&
    css`
      color: ${color.mediumdark};
      &:hover {
        color: ${color.dark};
      }
      &:active {
        color: ${color.darker};
      }
    `};
  ${props =>
    props.tertiary &&
    css`
      color: ${color.dark};
      &:hover {
        color: ${color.darkest};
      }
      &:active {
        color: ${color.mediumdark};
      }
    `};
  ${props =>
    props.nochrome &&
    css`
      color: inherit;
      &:hover,
      &:active {
        color: inherit;
        text-decoration: underline;
      }
    `};
  ${props =>
    props.inverse &&
    css`
      color: ${color.lightest};
      &:hover {
        color: ${color.lighter};
      }
      &:active {
        color: ${color.light};
      }
    `};
  ${props =>
    props.isButton &&
    css`
      border: 0;
      border-radius: 0;
      background: none;
      padding: 0;
      font-size: inherit;
    `};
`;

const LinkInner = styled.span`
  ${props =>
    props.withArrow &&
    css`
      > svg:last-of-type {
        height: 0.7em;
        width: 0.7em;
        margin-right: 0;
        margin-left: 0.25em;
        bottom: auto;
        vertical-align: inherit;
      }
    `};
`;

const LinkA = styled.a`
  ${linkStyles};
`;

const LinkButton = styled.button`
  /* reset button styles */
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  ${linkStyles};
`;

export { linkStyles, LinkInner, LinkButton, LinkA };
