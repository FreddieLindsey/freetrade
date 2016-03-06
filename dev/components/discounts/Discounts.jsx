require("./Discounts.scss");
import React from 'react';
import $ from 'jquery';

import DiscountAdd from './DiscountAdd';
import DiscountSearch from './DiscountSearch';
import DiscountList from './DiscountList';

const compareDiscounts = (a, b) => {
  if (a.rate < b.rate) { return -1; }
  if (a.rate > b.rate) { return  1; }
  return 0;
};

export default class Discounts extends React.Component {
  static displayName = 'Discounts';

  constructor(props) {
    super(props);
    this.state = {
      discounts: [],
      discountsFiltered: []
    };
  }

  componentWillMount() {
    this.getDiscounts();
  }

  getDiscounts = () => {
    // Retrieves discounts from server and resets search
    $.ajax({
      url: '/api/discounts'
    }).done((res) => {
      let discounts = res.discounts;
      for (let i = 0; i < discounts.length; i++) {
        discounts[i].product = res.products[i];
      } // Disgusting
      discounts.sort(compareDiscounts);
      this.setState({
        asin: '',
        discountNew: '',
        expiry: '',
        discounts: discounts,
        discountsFiltered: discounts,
        searchValue: ''
      });
    }).fail((err) => {
      console.log(err);
    });
  }

  handleAdd = () => {
    let discount = this.state.discountNew.match(/[0-1]{0,1}[0-9]{1,2}/g)[0]
    let expiry = new Date(this.state.expiry);
    $.ajax({
      method: 'POST',
      url: '/api/discounts/create',
      data: {
        asin: this.state.asin,
        discount: parseInt(discount) / 100,
        expiry: expiry.toISOString()
      }
    }).done((res) => {
      let discounts = this.state.discounts;
      let discount = res.discount;
      discount.product = res.product;
      discounts = discounts.filter((d) => {
        return d.id != discount.id
      })
      discounts.unshift(discount);
      this.setState({
        asin: '',
        expiry: '',
        discountNew: '',
        discounts: discounts,
        discountsFiltered: discounts
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
    case 'discount':
      this.setState({
        discountNew: newValue
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
      url: `/api/discounts/delete/${id}`
    }).done((res) => {
      let discounts = this.state.discounts;
      discounts = discounts.filter((d) => {
        return d.id != res.destroyed.id
      });
      this.setState({
        asin: '',
        expiry: '',
        discountNew: '',
        discounts: discounts,
        discountsFiltered: discounts
      });
    }).fail((err) => {
      alert(err);
    })
  }

  handleFilter = (input) => {
    let filter = input.target.value.trim();
    if (filter == '') {
      this.setState({
        discountsFiltered: this.state.discounts
      });
      return
    }
    let discountsFiltered = this.state.discounts.filter((d) => {
      return d.product.name.indexOf(filter) !== -1;
    });
    this.setState({
      discountsFiltered: discountsFiltered
    });
  }

  render() {
    return (
      <div className="console-content-container" >
        <DiscountAdd
          add={ this.handleAdd } valueChange={ this.handleChange }
          asin={ this.state.asin } discount={ this.state.discount }
          expiry={ this.state.expiry }
          />
        <DiscountSearch filter={ this.handleFilter } />
        <DiscountList discounts={ this.state.discountsFiltered }
          delete={ this.handleDelete } />
      </div>
    );
  }
};
