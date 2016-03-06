import React from 'react';
import { Router, Link, IndexRoute, Route, browserHistory } from 'react-router';

import Console from './components/Console';
import Discounts from './components/discounts/Discounts';
import ConsoleHome from './components/console/ConsoleHome';

export default class App extends React.Component {
  static displayName = 'Application';

  render() {
    return (
      <Router history={browserHistory} >
        <Route path="console" component={Console}>
          <IndexRoute name="home" component={ConsoleHome} />
          <Route name="reports" path="reports" component={ConsoleHome} />
          <Route name="discounts" path="discounts" component={Discounts} />
        </Route>
      </Router>
    );
  }
};
