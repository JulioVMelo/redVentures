import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Sunlight from './screens/Sunlight';
import Water from './screens/Water';
import Pets from './screens/Pets';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sunlight/:sun?" exact component={Sunlight} />
      <Route path="/sunlight/:sun/water/:water?" exact component={Water} />
      <Route path="/sunlight/:sun/water/:water?/pets" component={Pets} />
    </Switch>
  );
}
