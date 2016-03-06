import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import ConsoleView from './ConsoleView';

export default class Console extends React.Component {
  static displayName = 'Console Application';

  render() {
    return (
      <Router history={browserHistory} >
        <Route path="/console" component={ConsoleView} />
      </Router>
    );
  }
};
