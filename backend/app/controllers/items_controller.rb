class ItemsController < ApplicationController
    def index
        render json: current_user.items.with_attached_image
    #     items = Item.all.joins(:image_attachment)
    #     render json: @users.map { |user| 
    #        user.as_json(only: %i[name]).merge(
    #        avatar_path: url_for(user.avatar) }  
    end 

    def create
        item = current_user.items.create(item_params)
        render json: item
    end 

    def show
        item  = Item.find_by(id: params[:id])
        # image = rails_blob_path(item.image)
        render json: item
    end

    def destroy 
        item  = Item.find_by(id: params[:id])
        render json: item.destroy
    end 

    private 
    def item_params
        params.permit(:brand, :size, :color, :image) 
    end 
end
