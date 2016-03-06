require("./Console.scss");
import React from 'react';
import { Link } from 'react-router';

export default class Console extends React.Component {
  static displayName = 'Console Application';
  static propTypes = {
    children: React.PropTypes.object
  };

  render() {
    return (
      <div className="console-container">
          <div className="console-nav">
            <Link to="/console/">Data Overview</Link>
            <Link to="/console/reports">Reports</Link>
            <Link to="/console/discounts">Discounts</Link>
          </div>
          <div className="console-content">
            { this.props.children }
          </div>
      </div>
    );
  }
};
