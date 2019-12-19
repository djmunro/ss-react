import styled from '@emotion/styled';
import { css } from '@emotion/core';


const stylesFromProps = ({ variant, theme }) => {
  switch (variant) {
    case 'outlined':
      return css`
        color: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
        `;
    case 'clear':
      return css`
        color: ${theme.colors.primary};
        border: none;
        `;
    default:
      return css`
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
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

export default Button;
