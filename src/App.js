import React from 'react';
import { Route } from 'react-router-dom';
import './styles/scss/index.scss';

import {
  Register,
  Login,
  VendorProfile,
  Browse,
  CustomerFacingVendorProfile,
  LandingPage
} from './components/index';

const App = () => {
  console.log(window.cloudinary);
  return (
    <>
      <div id='wrapper'>
        <Route exact path='/' component={LandingPage} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        {/* <Route path="/profile/:id" component={VendorProfile} /> */}

        {/* <Route path="/browse/:id" component={CustomerFacingVendorProfile} /> */}
      </div>
      <div>
        <Route path='/profile/:id' component={VendorProfile} />
        <Route path='/browse/:id' component={CustomerFacingVendorProfile} />
        <Route exact path='/browse' component={Browse} />
      </div>
    </>
  );
};

export default App;
