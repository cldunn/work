import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";


import './App.scss';

import store from './app/store';
import Landing from './app/landing/landing-container';
import createInterceptors from "./app/axios-intercptor";

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