import React from 'react';
import { Route } from 'react-router-dom';

import Register from './components/Register';

function App() {
  return (
    <div>
      <h1>Quickstreet</h1>
      <Route path='/register' component={Register} /> 
    </div>
  );
}

export default App;
