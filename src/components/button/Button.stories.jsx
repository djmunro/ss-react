import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export default {
  title: 'Button',
};


export const basic = () => (
  <>
    <Button onClick={action('clicked')}>Default Button</Button>
    <Button onClick={action('clicked')} variant="outlined">Outlined Button</Button>
    <Button onClick={action('clicked')} variant="clear">Clear Button</Button>
  </>
);


export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
