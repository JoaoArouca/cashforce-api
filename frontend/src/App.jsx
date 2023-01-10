import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';

function Routes() {
  return (
    <>
      <Header />
      <SideBar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </>

  );
}

export default Routes;
