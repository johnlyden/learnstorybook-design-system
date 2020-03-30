import React from 'react';
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { addParameters } from '@storybook/react';

import { GlobalStyle } from '../src/shared/global';

addDecorator(withA11y);
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

addParameters({
  options: {
    storySort: (a, b) => {
      console.log(a);
      return a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
    },
  },
});
