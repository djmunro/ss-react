import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const TableWrapper = styled.table`
  border-spacing: 0;
  width: 100%;
`;

const cellStyles = css`
  border-bottom: 0.1rem solid #e1e1e1;
  text-align: left;
  padding: 1.2rem 0;
`;

const TableHead = styled.th`
  ${cellStyles}
`;

const TableCell = styled.td`
  ${cellStyles}
`;

const Table = ({ columns, data }) => (
  <TableWrapper>
    <thead>
      <tr>
        {columns.map((column) => (
          <TableHead>{column}</TableHead>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((items) => (
        <tr>
          {items.map((item) => (
            <TableCell>{item}</TableCell>
          ))}
        </tr>
      ))}
    </tbody>
  </TableWrapper>
);

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.array),
};

Table.defaultProps = {
  columns: [],
  data: [],
};

export default Table;
