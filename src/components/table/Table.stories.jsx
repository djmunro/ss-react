import React from 'react';

import Table from './Table';

export default {
  title: 'Table',
};

const columns = ['Name', 'Age', 'Height', 'Location'];
const tableData = [
  ['Stephen Curry', '27', '1, 91', 'Akron, OH'],
  ['Klay Thompson', '25', '2, 01', 'Los Angels, CA'],
];

export const basic = () => <Table columns={columns} data={tableData} />;
