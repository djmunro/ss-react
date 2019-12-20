import React from 'react';
import { action } from '@storybook/addon-actions';

import Label from './Label';
import Input from './Input';

export default {
  title: 'Form',
};

export const input = () => (
  <>
    <Label for="text-input">Label</Label>
    <Input id="text-input" placeholder="placeholder" />
  </>
);

export const all = () => (
  <>
    <Label for="text-input">Name</Label>
    <Input id="text-input" placeholder="CJ Patoilo" />
  </>
);
