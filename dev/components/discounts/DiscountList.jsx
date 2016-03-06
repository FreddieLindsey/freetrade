import React from 'react';
import $ from 'jquery';

import DiscountListItem from './DiscountListItem';

export default class DiscountList extends React.Component {
  static displayName = 'DiscountList';
  static propTypes = {
    discounts: React.PropTypes.arrayOf(
      React.PropTypes.object
    )
  };

  render() {
    return (
      <div className="discount-list-container" >
        { this.props.discounts && this.props.discounts.length > 0 &&
          this.props.discounts.map((d) => {
            return (
              <DiscountListItem key={ d.id } discount={ d } />
            );
          })}
        { (!this.props.discounts || this.props.discounts.length == 0) &&
          <div className="discount-list-noitems" >
            No discounts available!
          </div>
        }
      </div>
    );
  }
};
