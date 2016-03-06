class CreateDiscounts < ActiveRecord::Migration
  def change
    create_table :discounts do |t|
      t.references :product, index: true, foreign_key: true
      t.datetime :expiry
      t.float :rate

      t.timestamps null: false
    end
  end
end
