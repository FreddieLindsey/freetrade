class DiscountsController < ApplicationController
  def index
    discounts = Discount.all
    products = []
    if discounts.length > 0
      discounts.each do |d|
        products.push(d.product)
      end
    end
    render  json: { discounts: discounts, products: products },
            status: 200,
            content_type: 'text/json'
  end

  def create
  end

  def edit
  end

  def delete
  end
end
