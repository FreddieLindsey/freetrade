class AddColumnsToProduct < ActiveRecord::Migration
  def change
    add_column :products, :asin, :string
    add_column :products, :url, :string
  end
end
