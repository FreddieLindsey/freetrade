class ProductsController < ApplicationController
  def index
    u = get_user params[:facebook_id]
    unless u.nil?
      products = u.product.includes(:discount)
      render  json: { products: products, message: "It is the client's fault! Typical user error" },
              status: 200,
              content_type: 'text/json'
    else
      render  json: { message: "No user found: id #{params[:facebook_id]}" },
              status: :bad_request,
              content_type: 'text/json'
    end
  end

  def add
    u = get_user params[:facebook_id]
    unless u.nil?
      product = Product.new(name: params[:name], user_id: u.id)
      unless product.valid?
        render  json: { message: 'Product has invalid name', product_error: product.errors.full_messages },
                status: :bad_request,
                content_type: 'text/json'
        return
      else
        product.save
        render  json: { product: product },
                status: 200,
                content_type: 'text/json'
        return
      end
    else
      render  json: { message: "No user found: id #{params[:facebook_id]}" },
              status: :bad_request,
              content_type: 'text/json'
    end
  end

  def edit
    u = get_user params[:facebook_id]
    unless u.nil?
      product = Product.find_by(id: params[:id], user_id: u.id)
      product.name = params[:name] if params[:name_new]
      unless product.valid?
        render  json: { message: 'Product has invalid name', product_error: product.errors.full_messages },
                status: :bad_request,
                content_type: 'text/json'
        return
      else
        product.save
        render  json: { product: product },
                status: 200,
                content_type: 'text/json'
        return
      end
    else
      render  json: { message: "No user found: id #{params[:facebook_id]}" },
              status: :bad_request,
              content_type: 'text/json'
    end
  end

  def get_user(id)
    if !id
      render  json: { message: "No id given" },
              status: 401,
              content_type: 'text/json'
      return
    end

    User.find_by(facebook_id: id)
  end
end
