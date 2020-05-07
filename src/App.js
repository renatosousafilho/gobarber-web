import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';

import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Routes></Routes>
    </Router>
  );
}

export default App;
