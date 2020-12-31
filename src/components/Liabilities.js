import React from 'react';
import InputItem from './InputItem.js';

const Liabilities = () => {
  return (
    <div id="LiabilityGroup">
    <h2>Liabilities</h2>
      <InputItem id="liabilityItem" description="Mortgages" /><br />
      <InputItem id="liabilityItem" description="Consumer Debt" /><br />
      <InputItem id="liabilityItem" description="Personal Loans" /><br />
      <InputItem id="liabilityItem" description="Student Loans" /><br />
      <InputItem id="liabilityItem" description="Auto Loans" /><br />
      <InputItem id="liabilityItem" description="Other Debt" /><br />
    </div>
  );
}

export default Liabilities;

