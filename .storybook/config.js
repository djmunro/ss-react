/** @jsx jsx */
import { configure, addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-emotion-theme';
import { Global, css, jsx } from '@emotion/core'

import { theme, GlobalStyles } from "../src/theme/global";

addDecorator(withThemesProvider([theme.light, theme.dark, theme.retro, theme.default]));

addDecorator(story => (
  <div>
    <Global styles={css(GlobalStyles)} />
    {story()}
  </div>
));

configure(require.context('../src', true, /\.stories.(js|jsx)$/), module);
