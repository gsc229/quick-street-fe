import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/scss/index.scss';
import UserContext from './contexts/UserContext';
import Contexts from './contexts/Contexts';

import {
  Register, // ** Register
  Login, // ** Login
  Vendor, // ** Browsing Vendor Page
  Browse, // ** Browsing page (Map, Search)
  Landing, // ** Home Page
  Profile, //** Vendors Editing Page */
  Styling, // ** Styling Template */
  Dashboard // ** Dashboard Page **/
} from './pages/index';

const App = () => {
  return (
    <div>
      <Contexts>
        <Route path='/styling' component={Styling} />
        <Route exact path='/' component={Landing} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Switch>
          <Route path='/profile/:id' component={Profile} />
          <Route path='/browse/:id' component={Vendor} />
          <Route path='/browse' component={Browse} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </Contexts>
    </div>
  );
};

export default App;
