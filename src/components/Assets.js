import React from 'react';
import InputItem from './InputItem.js';

const Assets = () => {
  return (
    <div id="AssetGroup">
    <h2>Assets</h2>
      <InputItem id="assetItem" description="Real Estate" /><br />
      <InputItem id="assetItem" description="Checking Accounts" /><br />
      <InputItem id="assetItem" description="Savings Accounts" /><br />
      <InputItem id="assetItem" description="Retirement Accounts" /><br />
      <InputItem id="assetItem" description="Autos" /><br />
      <InputItem id="assetItem" description="Other" /><br />
    </div>
  );
}

export default Assets;

