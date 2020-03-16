import { create } from '@storybook/theming/create';

const green1 = '#4ba373';
const silver = '#bbbbbb';
const alto = '#dddddd';
const wildSand = '#f5f5f5';
const cobalt = '#006298';
const white = '#ffffff';
const swamp = '#002021';

export default create({
  base: 'light',

  colorPrimary: green1,
  colorSecondary: cobalt,

  // UI
  appBg: alto,
  appContentBg: wildSand,
  appBorderColor: silver,
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: swamp,
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: silver,
  barSelectedColor: white,
  barBg: green1,

  // Form colors
  inputBg: wildSand,
  inputBorder: silver,
  inputTextColor: swamp,
  inputBorderRadius: 4,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage:
    'https://www.everlywell.com/images/logos/2019-rebrand/everlywell-logo-e3288d32.svg',
});
