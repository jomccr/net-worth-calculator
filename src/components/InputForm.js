import React, { useState } from 'react';
import { Button, Grid } from '@material-ui/core';

import Assets from './Assets.js';
import Liabilities from './Liabilities.js';

/* The component */
const InputForm = ({handleUpdateNetWorth}) => {
  const [netWorth, setNetWorth] = useState(0);

  let netWorthStyle = {
    color:'green'
  };

  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div>
    <h2>Net Worth:</h2>
    <h1 style={netWorthStyle}>{formatter.format(netWorth)}</h1>
    <p>Enter the monetary value of your assets and liabilities to find your net worth.</p>
    <hr />
    <form noValidate autoComplete="off">
    <Grid container spacing={2}>
      <Grid item xs>
        <Assets />
      </Grid>
      <Grid item xs>
        <Liabilities />
      </Grid>
    </Grid>
    </form>

    <Button variant="contained" onClick={() => setNetWorth(calculateNetWorth())}>Calculate</Button>
    </div>
  );
}

/* Helper function to scrape the page for assets and liabilities and do the NW calculation */ 
const calculateNetWorth = () => {
  var assetTotal = 0;
  var liabilityTotal = 0; 

  let assets = document.getElementById('AssetGroup').getElementsByTagName('input');
  let liabilities = document.getElementById('LiabilityGroup').getElementsByTagName('input');

  for (var asset of assets) {
    assetTotal += asset.value === "" ? 0 : Number(asset.value);
  }
  for (var liability of liabilities) {
    liabilityTotal += liability.value === "" ? 0 : Number(liability.value);
  }

  return Number(assetTotal - liabilityTotal);
}

export default InputForm;
