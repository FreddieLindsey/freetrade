class User < ActiveRecord::Base
  has_many :product_association
  has_many :product, through: :product_association
end
