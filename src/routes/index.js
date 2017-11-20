import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';

import PageWrapper from '../components/PageWrapper'

class RouteList extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' component={PageWrapper} />
      </Switch>
    )
  }
}

export default RouteList;
