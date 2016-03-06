require("./Products.scss");
import React from 'react';
import $ from 'jquery';

import ProductSearch from './ProductSearch';
import ProductList from './ProductList';

const compareProducts = (a, b) => {
  if (a.rate < b.rate) { return -1; }
  if (a.rate > b.rate) { return  1; }
  return 0;
};

export default class Products extends React.Component {
  static displayName = 'Products';

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productsFiltered: []
    };
  }

  componentWillMount() {
    this.getProducts();
  }

  getProducts = () => {
    // Retrieves products from server and resets search
    $.ajax({
      url: '/api/products'
    }).done((res) => {
      let products = res.products;
      products.sort(compareProducts);
      this.setState({
        asin: '',
        productNew: '',
        expiry: '',
        products: products,
        productsFiltered: products,
        searchValue: ''
      });
    }).fail((err) => {
      console.log(err);
    });
  }

  handleAdd = () => {
    let product = this.state.productNew.match(/[0-1]{0,1}[0-9]{1,2}/g)[0]
    let expiry = new Date(this.state.expiry);
    $.ajax({
      method: 'POST',
      url: '/api/products/create',
      data: {
        asin: this.state.asin,
        product: parseInt(product) / 100,
        expiry: expiry.toISOString()
      }
    }).done((res) => {
      let products = this.state.products;
      let product = res.product;
      products = products.filter((d) => {
        return d.id != product.id
      })
      products.unshift(product);
      this.setState({
        asin: '',
        expiry: '',
        productNew: '',
        products: products,
        productsFiltered: products
      });
    }).fail((err) => {
      alert(err);
    })
  }

  handleChange = (stateVar, newValue) => {
    switch(stateVar) {
    case 'asin':
      this.setState({
        asin: newValue
      });
      break;
    case 'product':
      this.setState({
        productNew: newValue
      });
      break;
    case 'expiry':
      this.setState({
        expiry: newValue
      });
    }
  }

  handleDelete = (id) => {
    $.ajax({
      method: 'DELETE',
      url: `/api/products/delete/${id}`
    }).done((res) => {
      let products = this.state.products;
      products = products.filter((d) => {
        return d.id != res.destroyed.id
      });
      this.setState({
        asin: '',
        expiry: '',
        productNew: '',
        products: products,
        productsFiltered: products
      });
    }).fail((err) => {
      alert(err);
    })
  }

  handleFilter = (input) => {
    let filter = input.target.value.trim();
    if (filter == '') {
      this.setState({
        productsFiltered: this.state.products
      });
      return
    }
    let productsFiltered = this.state.products.filter((d) => {
      return d.product.name.indexOf(filter) !== -1;
    });
    this.setState({
      productsFiltered: productsFiltered
    });
  }

  render() {
    return (
      <div className="console-content-container" >
        <ProductSearch filter={ this.handleFilter } />
        <ProductList products={ this.state.productsFiltered }
          delete={ this.handleDelete } />
      </div>
    );
  }
};
