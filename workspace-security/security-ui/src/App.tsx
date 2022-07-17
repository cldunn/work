import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";


import 'afw-components/afw-components.css';
import './app.scss';

import store from './security/store';
import Landing from './security/landing/landing-container';
import createInterceptors from "./security/axios-interceptor";

const App: React.FC = () => {
  createInterceptors(store.dispatch);

  return (
    <div className='full'>
      <Switch>
        <Route path="/landing" component={Landing} />
        <Redirect from="/" to='/landing' />
      </Switch>
    </div>
  )
};

export default App;