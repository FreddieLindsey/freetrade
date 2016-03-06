class ProductAdminController < ApplicationController
  def index
    products = Product.all
    render  json: { products: products },
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
