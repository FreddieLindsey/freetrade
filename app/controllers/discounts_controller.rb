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
    p = Product.find_by(asin: params[:asin])
    if p.nil?
      render  json: { message: "Product not found! ASIN: #{params[:asin]}" },
              status: :bad_request,
              content_type: 'text/json'
      return
    end
    d = Discount.find_or_create_by(
      product_id: p.id,
      expiry: params[:expiry],
      rate: params[:discount]
    )
    render  json: { discount: d, product: p },
            status: :ok,
            content_type: 'text/json'
  end

  def edit
    render  json: { message: "Unimplemented endpoint!" },
            status: :bad_request,
            content_type: 'text/json'
  end

  def delete
    d = Discount.find_by(id: params[:id])
    unless d.nil?
      d = d.destroy
      render  json: { destroyed: d },
              status: :ok,
              content_type: 'text/json'
    else
      render  json: { message: "Discount with id #{params[:id]} not found" },
              status: :not_found,
              content_type: 'text/json'
    end
  end
end
