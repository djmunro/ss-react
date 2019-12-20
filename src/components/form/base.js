import { css } from '@emotion/core';

export const baseInputStyles = ({ theme }) => css`
  background-color: transparent;
  border: 0.1rem solid #d1d1d1;
  border-radius: 0.4rem;
  box-shadow: none;
  box-sizing: inherit;
  height: 3.8rem;
  padding: 0.6rem 1rem;
  width: 100%;

  :focus {
    border-color: ${theme.colors.primary};
    outline: 0;
  }
`;
