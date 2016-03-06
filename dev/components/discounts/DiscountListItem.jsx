import React from 'react';

export default class DiscountListItem extends React.Component {
  static displayName = 'DiscountListItem';
  static propTypes = {
    delete: React.PropTypes.func,
    discount: React.PropTypes.shape({
      expiry: React.PropTypes.string,
      rate: React.PropTypes.number,
      product: React.PropTypes.object
    })
  };

  render() {
    let d = this.props.discount;
    let d_ = new Date(d.expiry);
    d_ = d_.toLocaleDateString();
    return (
      <div className="discount-list-item-container" >
        <div className="discount-list-item-titles" >
          <div className="discount-list-item-name" >
            { d.product.name }
          </div>
        </div>
        <div className="discount-list-item-date">
          <mark> { d.rate * 100 }%</mark> off until { d_ }
        </div>
        <button className="fa fa-lg fa-times-circle-o discount-list-item-delete"
          onClick={ this.props.delete } />
      </div>
    );
  }
};
