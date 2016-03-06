import React from 'react';

export default class DiscountSearch extends React.Component {
  static displayName = 'DiscountSearch';
  static propTypes = {
    value: React.PropTypes.string,
    filter: React.PropTypes.func
  }

  render() {
    return (
      <div className="discount-add-container" >
        <input
          className="discount-add-input" value={ this.props.value }
          onChange={ this.props.filter } placeholder="Search discounts by keyword (title)" />
      </div>
    );
  }
};
