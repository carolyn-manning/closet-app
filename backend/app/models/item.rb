class Item < ApplicationRecord
    has_one_attached :image
    belongs_to :user

    scope :color, -> (color) {where(:color => color)}
    scope :type, -> (type) {where(:type => type)}
    scope :brand, -> (brand) {where(:brand => brand)}
    scope :size, -> (size) {where(:size => size)}

end
