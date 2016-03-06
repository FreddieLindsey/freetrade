require("./Discounts.scss");
import React from 'react';

import DiscountAdd from './DiscountAdd';
import DiscountList from './DiscountList';

export default class Discounts extends React.Component {
  static displayName = 'Discounts';

  render() {
    return (
      <div className="console-content-container" >
        <DiscountAdd />
        <DiscountList />
      </div>
    );
  }
};
