class DataInformationController < ApplicationController
  def popular_products
    p = ProductAssociation.group(:product_id).count
    products = []
    if p.length > 0
      p.each do |id, count|
        product = Product.find_by(id: id)
        products.push({ product: product, count: count})
      end
    end
    render  json: products,
            status: :ok,
            content_type: 'text/json'
  end
end
