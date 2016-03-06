require("./Console.scss");
import React from 'react';
import { Router, Link, Route, browserHistory } from 'react-router';

import ConsoleHome from './console/ConsoleHome';

export default class ConsoleView extends React.Component {
  static displayName = 'Console Application';

  render() {
    return (
      <div className="console-container">
          <div className="console-nav">
            <Link to="home">Summary</Link>
            <Link to="reports">Reports</Link>
          </div>
          <div className="console-content">
            <Router history={browserHistory} >
              <Route name="home" path="/" component={ConsoleHome} />
              <Route name="reports" path="/reports" component={ConsoleHome} />
            </Router>
          </div>
      </div>
    );
  }
};
