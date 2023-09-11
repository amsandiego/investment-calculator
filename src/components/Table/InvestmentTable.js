import React from 'react';
import InvestmentTableEntry from './InvestmentTableEntry';

const InvestmentTable = () => {
  return (
    <table className='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <InvestmentTableEntry />
      </tbody>
    </table>
  );
};

export default InvestmentTable;
