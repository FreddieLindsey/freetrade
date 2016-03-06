import React from 'react';

export default class ProductSearch extends React.Component {
  static displayName = 'ProductSearch';
  static propTypes = {
    value: React.PropTypes.string,
    filter: React.PropTypes.func
  }

  render() {
    return (
      <div className="product-add-container" >
        <input
          className="product-add-input" value={ this.props.value }
          onChange={ this.props.filter } placeholder="Search products by keyword (title)" />
      </div>
    );
  }
};
