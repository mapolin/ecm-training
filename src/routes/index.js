import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';

import ListPage from '../containers/ListPage';

class RouteList extends Component {
  render() {
    return (
      <Switch>
        <Route path='/:filter' component={ListPage} />
        <Route path='/' component={ListPage} />
      </Switch>
    )
  }
}

export default RouteList;
