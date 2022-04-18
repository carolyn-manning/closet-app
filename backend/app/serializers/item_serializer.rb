class ItemSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :brand, :size, :color, :image_url

  def image_url 
    if object.image.attached?
      rails_blob_path(object.image, only_path:true) 
    else 
      '/images/dressform.jpg'
    end 
  end 

end
