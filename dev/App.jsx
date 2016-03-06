import React from 'react';
import { Router, Link, IndexRoute, Route, browserHistory } from 'react-router';

import Console from './components/Console';
import Discounts from './components/discounts/Discounts';
import Products from './components/products/Products';
import DataOverview from './components/data_overview/DataOverview';

export default class App extends React.Component {
  static displayName = 'Application';

  render() {
    return (
      <Router history={browserHistory} >
        <Route path="console" component={Console}>
          <IndexRoute name="home" component={DataOverview} />
          {/*<Route name="reports" path="reports" component={ConsoleHome} />*/}
          <Route name="discounts" path="discounts" component={Discounts} />
          <Route name="products" path="products" component={Products} />
        </Route>
      </Router>
    );
  }
};
