import React from 'react';
import { Router, Link, IndexRoute, Route, browserHistory } from 'react-router';

import Console from './components/Console';
import ConsoleHome from './components/console/ConsoleHome';

export default class App extends React.Component {
  static displayName = 'Application';

  render() {
    return (
      <Router history={browserHistory} >
        <Route path="console" component={Console}>
          <IndexRoute name="console-home" component={ConsoleHome} />
          <Route name="console-reports" path="reports" component={ConsoleHome} />
        </Route>
      </Router>
    );
  }
};
