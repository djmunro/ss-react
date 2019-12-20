import React from 'react';
import styled from '@emotion/styled';

import {
  H1, H2, H3, H4, H5, H6, P, A, Em, Small, Strong, U,
} from './Typography';

export default {
  title: 'Typography',
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const basic = () => (
  <Container>
    <P>The base type is 1.6rem (16px) over 1.6 line height (24px)</P>
    <A>Anchor</A>
    <Em>Emphasis</Em>
    <Small>Small</Small>
    <Strong>Strong</Strong>
    <U>Underline</U>

    <br />

    <H1>Heading</H1>
    <H2>Heading</H2>
    <H3>Heading</H3>
    <H4>Heading</H4>
    <H5>Heading</H5>
    <H6>Heading</H6>
  </Container>
);
