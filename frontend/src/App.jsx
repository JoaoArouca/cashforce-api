import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Dashboard from './Components/Dashboard/Dashboard';

function Routes() {
  return (

    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>

  );
}

export default Routes;
