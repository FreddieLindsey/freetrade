class ProductsController < ApplicationController
  def index
    if !params[:facebook_id]
      render  json: {},
              status: 401,
              content_type: 'text/json'
    end

    u = User.find_by(facebook_id: params[:facebook_id])
    unless u.nil?
      products = u.product
      render  json: products,
              status: 200,
              content_type: 'text/json'
    else
      render  json: {},
              status: 400,
              content_type: 'text/json'
    end
  end

  def add
  end

  def edit
  end

  def delete
  end
end
