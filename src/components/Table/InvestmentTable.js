import React from 'react';
import InvestmentTableEntry from './InvestmentTableEntry';
import InvestmentTableHead from './InvestmentTableHead';

const InvestmentTable = () => {
  return (
    <table className='result'>
      <InvestmentTableHead />
      <tbody>
        <InvestmentTableEntry />
      </tbody>
    </table>
  );
};

export default InvestmentTable;
