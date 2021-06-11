import React from "react";
import { Switch, Route } from "react-router-dom";

import './App.scss';

import Login from './login/login-container';
import Landing from './app/landing/landing-container';

const App: React.FC = () => {
  return (
    <div className='full'>
      <Switch>
        <Route path="/landing" component={Landing} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  )
};

export default App;