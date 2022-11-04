class AddTypeToItem < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :item_type, :string  
  end
end
