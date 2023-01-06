class Item < ApplicationRecord
    has_one_attached :image
    belongs_to :user

    scope :is_color, -> (color) {where(:color => color)}
    scope :is_type, -> (type) {where(:type => type)}
    scope :is_brand, -> (brand) {where(:brand => brand)}
    scope :is_size, -> (size) {where(:size => size)}

end
