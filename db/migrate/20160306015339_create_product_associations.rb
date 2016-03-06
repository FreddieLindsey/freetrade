class CreateProductAssociations < ActiveRecord::Migration
  def change
    create_table :product_associations do |t|
      t.references :user, index: true, foreign_key: true
      t.references :product, index: true, foreign_key: true
      t.boolean :complete
      t.datetime :start_date
      t.datetime :end_date
      t.float :probability

      t.timestamps null: false
    end
  end
end
