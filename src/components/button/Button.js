import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import { css } from '@emotion/core';


const stylesFromProps = ({ variant, theme }) => {
  switch (variant) {
    case 'outlined':
      return css`
        color: ${theme.colors.primary};
        border-color: ${theme.colors.primary};

        :focus,
        :hover {
            border-color: ${theme.colors.secondary};
            color: ${theme.colors.secondary};
        }
        `;
    case 'clear':
      return css`
        color: ${theme.colors.primary};
        background: transparent;
        border: none;

        :focus,
        :hover {
            color: ${theme.colors.secondary};
        }
         `;
    default:
      return css`
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
        border-color: ${theme.colors.primary};

        :focus,
        :hover {
            background: ${theme.colors.secondary};
            border-color: ${theme.colors.secondary};
        }
      `;
  }
};

const Button = styled.button`
    text-align: center;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: .1rem;
    border-radius: .4rem;
    height: 3.8rem;
    padding: 0 3rem;
    text-transform: uppercase;
    cursor: pointer;
    ${stylesFromProps};
`;

Button.propTypes = {
  variant: PropTypes.string,
};

Button.defaultProps = {
  variant: 'default',
};

export default Button;
