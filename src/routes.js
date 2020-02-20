import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Sunlight from './screens/Sunlight';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sunlight" exact component={Sunlight} />
    </Switch>
  );
}
