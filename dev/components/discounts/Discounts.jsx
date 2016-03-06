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
        discounts: discounts,
        discountsFiltered: discounts,
        searchValue: ''
      });
    }).fail((err) => {
      console.log(err);
    });
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
        <DiscountAdd />
        <DiscountSearch filter={ this.handleFilter } />
        <DiscountList discounts={ this.state.discountsFiltered }/>
      </div>
    );
  }
};
