import React from 'react';

export default class ProductListItem extends React.Component {
  static displayName = 'ProductListItem';
  static propTypes = {
    delete: React.PropTypes.func,
    product: React.PropTypes.shape({
      expiry: React.PropTypes.string,
      rate: React.PropTypes.number,
      product: React.PropTypes.object
    })
  };

  render() {
    let d = this.props.product;
    return (
      <div className="product-list-item-container" >
        <div className="product-list-item-titles" >
          <div className="product-list-item-name" >
            { d.name }
          </div>
        </div>
        <div className="product-list-item-date">
          <mark>ASIN: { d.asin }</mark>
        </div>
        <button className="fa fa-lg fa-times-circle-o product-list-item-delete"
          onClick={ this.props.delete } />
      </div>
    );
  }
};
