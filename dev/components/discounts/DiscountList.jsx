import React from 'react';
import $ from 'jquery';

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
              <div>
                { d }
              </div>
            );
          })}
      </div>
    );
  }
};
