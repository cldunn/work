import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";


import 'afw-components/afw-components.css';
import './app.scss';

import store from './oauth2/store';
import Landing from './oauth2/landing/landing-container';
import createInterceptors from "./oauth2/axios-interceptor";

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