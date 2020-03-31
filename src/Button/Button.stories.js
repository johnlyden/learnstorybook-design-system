import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import { Button } from './';
import { Icon } from '../Icon';
import { StoryLinkWrapper } from '../StoryLinkWrapper';

const CustomButton = styled.button`
  border: 1px solid green;
  background: lightgreen;
  color: rebeccapurple;
  padding: 1em;
  font-size: 1.2em;
`;

function ButtonWrapper(props) {
  return <CustomButton onClick={action('button action click')} {...props} />;
}

export default {
  title: 'Components|Button',
  component: Button,
};

export const allButtons = () => (
  <div>
    <Button appearance='primary'>Primary</Button>
    <Button appearance='secondary'>Secondary</Button>
    <Button appearance='primary' isDisabled>
      Disabled
    </Button>
    <Button appearance='secondary' isDisabled>
      Disabled
    </Button>
    <br />
    <Button appearance='primary' isLoading loadingText='loadin..'>
      Primary
    </Button>
    <Button appearance='secondary' isLoading>
      Secondary
    </Button>
    <br />
    <Button appearance='primary' size='small'>
      Primary
    </Button>
    <Button appearance='secondary' size='small'>
      Secondary
    </Button>
    <Button appearance='primary' isDisabled size='small'>
      Disabled
    </Button>
  </div>
);

allButtons.story = {
  name: 'all buttons',
};

export const buttonWrapper = () => (
  <div>
    <ButtonWrapper>Original Button Wrapper</ButtonWrapper>
    <br />
    <Button ButtonWrapper={ButtonWrapper} appearance='primary'>
      Primary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance='secondary'>
      Secondary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance='primary' isDisabled>
      Disabled
    </Button>
    <br />
    <Button ButtonWrapper={ButtonWrapper} appearance='primary' isLoading>
      Primary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance='secondary' isLoading>
      Secondary
    </Button>
    <br />
    <Button ButtonWrapper={ButtonWrapper} appearance='primary' size='small'>
      Primary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance='secondary' size='small'>
      Secondary
    </Button>
    <Button
      ButtonWrapper={ButtonWrapper}
      appearance='primary'
      isDisabled
      size='small'
    >
      Disabled
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance='primary' size='small'>
      <Icon icon='link' />
      Link
    </Button>
  </div>
);

buttonWrapper.story = {
  name: 'button wrapper',
};

export const anchorWrapper = () => (
  <div>
    <StoryLinkWrapper to='http://storybook.js.org'>
      Original Link Wrapper
    </StoryLinkWrapper>
    <br />
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance='primary'
      href='http://storybook.js.org'
    >
      Primary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance='secondary'
      href='http://storybook.js.org'
    >
      Secondary
    </Button>

    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance='primary'
      isDisabled
      href='http://storybook.js.org'
    >
      Disabled
    </Button>
    <br />
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance='primary'
      isLoading
      href='http://storybook.js.org'
    >
      Primary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance='secondary'
      isLoading
      href='http://storybook.js.org'
    >
      Secondary
    </Button>
    <br />
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance='primary'
      size='small'
      href='http://storybook.js.org'
    >
      Primary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance='secondary'
      size='small'
      href='http://storybook.js.org'
    >
      Secondary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance='primary'
      isDisabled
      size='small'
      href='http://storybook.js.org'
    >
      Disabled
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance='secondary'
      size='small'
      containsIcon
      href='http://storybook.js.org'
    >
      <Icon icon='link' aria-label='Link' />
    </Button>
  </div>
);

anchorWrapper.story = {
  name: 'anchor wrapper',
};
