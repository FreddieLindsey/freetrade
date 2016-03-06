import React from 'react';

export default class DiscountAdd extends React.Component {
  static displayName = 'DiscountAdd';
  static propTypes = {
    asin: React.PropTypes.string,
    discount: React.PropTypes.number,
    add: React.PropTypes.func
  }

  render() {
    return (
      <div className="discount-add-container" >
        <input
          className="discount-add-input" value={ this.props.asin }
          onChange={ this.props.add } placeholder="ASIN (Amazon Identifier)" />
        <hr />
        <input
          className="discount-add-input" value={ this.props.discount }
          onChange={ this.props.add } placeholder="Discount value" />
      </div>
    );
  }
};
