import React from 'react';
import { Input, InputAdornment } from '@material-ui/core';

const InputItem = ({description}) => {
  return (
    <div>
    <label htmlFor="itemValue">{description} </label>
    <br />
    <Input 
      id="itemValue" 
      type="text" 
      name="itemValue" 
      min="0" 
      placeholder="0"
      startAdornment={
        <InputAdornment position="start">$</InputAdornment>
      }
    />
    </div>
  );
}

export default InputItem;

