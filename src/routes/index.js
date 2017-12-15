import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';

import App from '../containers/App';

class RouteList extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/filter/:type" component={App} />
        <Route exact path="/sort/:by" component={App} />
        <Route path="/" component={App} />
      </Switch>
    );
  }
}

export default RouteList;
