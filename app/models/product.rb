class Product < ActiveRecord::Base
  has_many :discount
  has_many :product_association
  has_many :user, through: :product_association
end
