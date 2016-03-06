import React from 'react';
import $ from 'jquery';

import ProductListItem from './ProductListItem';

export default class ProductList extends React.Component {
  static displayName = 'ProductList';
  static propTypes = {
    delete: React.PropTypes.func,
    products: React.PropTypes.arrayOf(
      React.PropTypes.object
    )
  };

  render() {
    return (
      <div className="product-list-container" >
        { this.props.products && this.props.products.length > 0 &&
          this.props.products.map((d) => {
            return (
              <ProductListItem key={ d.id } product={ d }
                delete={ this.props.delete.bind(null, d.id) } />
            );
          })}
        { (!this.props.products || this.props.products.length == 0) &&
          <div className="product-list-noitems" >
            No products available!
          </div>
        }
      </div>
    );
  }
};
