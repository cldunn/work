import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";


import './App.scss';

import Demos from './demos/demos-container';

const App: React.FC = () => {
  return (
    <div className='full'>
      <Switch>
        <Route path="/demos" component={Demos} />
        <Redirect from="/" to='/demos' />
      </Switch>
    </div>
  )
};

export default App;