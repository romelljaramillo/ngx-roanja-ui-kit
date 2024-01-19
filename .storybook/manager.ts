import { addons } from '@storybook/manager-api';
// import { themes } from '@storybook/theming';
import rjTheme from './rj-theme';

addons.setConfig({
  theme: rjTheme,
});