class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :brand
      t.string :size
      t.string :color
    
      t.timestamps
    end
  end
end
