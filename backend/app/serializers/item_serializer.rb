class ItemSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :brand, :size, :color
  # :image_url

  # def image_url 
  #   rails_blob_path(object.image, only_path:true) if object.image.attached?
  # end 
end
