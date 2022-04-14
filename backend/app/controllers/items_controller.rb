class ItemsController < ApplicationController
    def index
        render json: Item.all
    end

    def create
        item = Item.new(item_params)
        if item.save 
            render json: item
        end
    end 

    def show
        item  = Item.find_by(id: params[:id])
        image = rails_blob_path(item.image)
        render json: {item: item, image:image}
    end

    def destroy 
        item  = Item.find_by(id: params[:id])
        render json: item.destroy
    end 

    private 
    def item_params
        params.require(:item).permit(:brand, :size, :color, :image) 
    end 
end
