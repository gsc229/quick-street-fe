import React from 'react';
import { Route } from 'react-router-dom';

import VendorRegister from './components/VendorRegister';

function App() {
  return (
    <div>
      <h1>Quickstreet</h1>
      <Route path='/vendorregister' component={VendorRegister} /> 
    </div>
  );
}

export default App;
