import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";


import './App.scss';

import store from './app/store';
import Login from './login/login-container';
import Demos from './demos/demos-container';
import Landing from './app/landing/landing-container';
import createInterceptors from "./app/axios-intercptor";

const App: React.FC = () => {
  createInterceptors(store.dispatch);

  return (
    <div className='full'>
      <Switch>
        <Route path="/demos" component={Demos} />
        <Route path="/login/:demo" component={Login} />
        <Route path="/landing/:demo" component={Landing} />
        <Redirect from="/" to='/demos' />
      </Switch>
    </div>
  )
};

export default App;