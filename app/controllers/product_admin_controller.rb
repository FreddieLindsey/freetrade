class ProductAdminController < ApplicationController
  def index
    products = Product.all
    render  json: { products: products },
            status: 200,
            content_type: 'text/json'
  end

  def create
    product = Product.find_or_create_by(
      asin: params[:asin],
      name: params[:name],
      url: params[:url]
    )
    render  json: { product: product },
            status: 200,
            content_type: 'text/json'
  end

  def edit
  end

  def delete
  end
end
