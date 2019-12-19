import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

// export default {
//   title: 'Button',
// };

// export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

// export const emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );

// import Button from './Button';

const buttonTypes = () => (
  <div>
    <Button onClick={action('Default Button Clicked')}>
      Default Button
    </Button>
  </div>
);

storiesOf('Button', module)
  .add('Types', buttonTypes);
