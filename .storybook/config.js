/** @jsx jsx */

import { configure, addDecorator } from '@storybook/react';
import { Global, css, jsx } from '@emotion/core'

export const bodyStyles = css`
  font-family: 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
`

addDecorator(story => (
  <div>
    <Global
      styles={css`
          body {
            ${bodyStyles}
          }
        `}
    />
    {story()}
  </div>
));


const req = require.context('../src', true, /\.stories.(js|jsx)$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
