import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import Label from './Label';
import Input from './Input';
import Select from './Select';

export default {
  title: 'Form',
};

export const input = () => (
  <>
    <Label htmlFor="text-input">Label</Label>
    <Input id="text-input" placeholder="placeholder" />
  </>
);

export const select = () => {
  const options = ['one', 'two'];
  const [value, setValue] = useState('');
  return (
    <Select>
      {options.map((option) => (
        <option value={`${option}`}>{option}</option>
      ))}
    </Select>
  );
};

export const all = () => (
  <>
    <Label htmlFor="text-input">Name</Label>
    <Input id="text-input" placeholder="CJ Patoilo" />
  </>
);
