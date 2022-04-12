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
        render json: item
    end

    def destroy 
        item  = Item.find_by(id: params[:id])
        render json: item.destroy
    end 

    private 
    def item_params
        params.require(:item).permit(:brand, :size, :color) 
    end 
end
