import React from 'react';
import { Route } from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div>
      <h1>Quickstreet</h1>
      <Route path='/register' component={Register} /> 
      <Route path='/login' component={Login} /> 
    </div>
  );
}

export default App;
