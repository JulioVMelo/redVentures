import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Sunlight from './screens/Sunlight';
import Water from './screens/Water';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sunlight/:sun?" exact component={Sunlight} />
      <Route path="/sunlight/:sun/water" component={Water} />
    </Switch>
  );
}
