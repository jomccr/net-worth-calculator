import React from 'react';
import { Container } from '@material-ui/core';
import InputForm from './components/InputForm.js';
import './static/App.css';

const App = () => {
  return (
    <div>
    <Container maxWidth="sm">
      <InputForm />
    </Container>
    </div>
  );
}

export default App;
