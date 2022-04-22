class ItemsController < ApplicationController
    def index
        render json: current_user.items.with_attached_image
    end 

    def create
        item = current_user.items.create(item_params)
        render json: item
    end 

    def show
        item  = Item.find_by(id: params[:id])
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
