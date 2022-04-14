class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :brand
      t.string :size
      t.string :color
      t.string :img, default: 'download-1.jpg'

      t.timestamps
    end
  end
end
