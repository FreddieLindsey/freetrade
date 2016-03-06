class Product < ActiveRecord::Base
  belongs_to :user
  has_many :discount
  has_many :product_association
end
