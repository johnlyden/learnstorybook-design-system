import React from 'react';
import styled from 'styled-components';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

export default {
  title: 'Welcome',
  component: Welcome,
};

const Wrap = styled.div`
  background-color: red;
  width: 200px;
  height: 200px;
`;

export const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;

export const testJohn = () => <Wrap>wrappin</Wrap>;

ToStorybook.story = {
  name: 'to Storybook',
};
