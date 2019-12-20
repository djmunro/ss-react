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

    <Label htmlFor="age">Age Range</Label>
    <Select id="age">
      <option value="0-13">0-13</option>
      <option value="14-17">14-17</option>
      <option value="18-23">18-23</option>
      <option value="24-plus">24+</option>
    </Select>
  </>
);
