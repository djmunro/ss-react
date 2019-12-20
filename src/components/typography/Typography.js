import styled from '@emotion/styled';
import { css } from '@emotion/core';

const baseHeading = css`
  font-weight: 300;
  letter-spacing: -0.1rem;
  margin-top: 0;
  margin-bottom: 2rem;
`;

export const H1 = styled.h1`
  ${baseHeading};
  font-size: 4.6rem;
  line-height: 1.2;
`;

export const H2 = styled.h2`
  ${baseHeading};
  font-size: 3.6rem;
  line-height: 1.25;
`;

export const H3 = styled.h3`
  ${baseHeading};
  font-size: 2.8rem;
  line-height: 1.3;
`;

export const H4 = styled.h4`
  ${baseHeading};
  font-size: 2.2rem;
  letter-spacing: -0.08rem;
  line-height: 1.35;
`;

export const H5 = styled.h5`
  ${baseHeading};
  font-size: 1.8rem;
  letter-spacing: -.05rem;
  line-height 1.5;
`;

export const H6 = styled.h6`
  ${baseHeading};
  font-size: 1.6rem;
  letter-spacing: 0;
  line-height 1.4;
`;

export const P = styled.p`
  margin-top: 0;
`;

export const A = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`;

export const Em = styled.em``;

export const Small = styled.small`
  font-size: smaller;
`;

export const Strong = styled.strong``;

export const U = styled.u``;
