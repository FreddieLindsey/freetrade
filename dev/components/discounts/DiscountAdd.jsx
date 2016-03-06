import React from 'react';

export default class DiscountAdd extends React.Component {
  static displayName = 'DiscountAdd';
  static propTypes = {
    asin: React.PropTypes.string,
    discount: React.PropTypes.string,
    expiry: React.PropTypes.string,
    add: React.PropTypes.func,
    valueChange: React.PropTypes.func
  }

  handleChangeASIN = (e) => {
    this.props.valueChange('asin', e.target.value);
  }

  handleChangeDiscount = (e) => {
    this.props.valueChange('discount', e.target.value);
  }

  handleChangeExpiry = (e) => {
    this.props.valueChange('expiry', e.target.value);
  }

  handleKeyDown = (e) => {
    if (e.keyCode == 13) {
      this.props.add()
    }
  }

  render() {
    return (
      <div className="discount-add-container" >
        <div className="discount-add-container-title">
          Add a new discount
        </div>
        <input
          className="discount-add-input" value={ this.props.asin }
          onChange={ this.handleChangeASIN } onKeyDown={ this.handleKeyDown } placeholder="ASIN (Amazon Identifier)" />
        <hr />
        <input
          className="discount-add-input-half" value={ this.props.discount }
          onChange={ this.handleChangeDiscount } onKeyDown={ this.handleKeyDown } placeholder="Discount value (%)" />
        <input
          className="discount-add-input-half" value={ this.props.expiry }
          onChange={ this.handleChangeExpiry } onKeyDown={ this.handleKeyDown } placeholder="Expiry date (YYYY-MM-DD)" />
      </div>
    );
  }
};
